/**
 * The Apache License 2.0
 * Copyright (c) 2016 Zhang Peng
 */
package org.zp.tents.tools;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * JSON 工具类
 *
 * @author Zhang Peng
 * @date 2017/1/12.
 */
public class JsonHelper {
    private static final Logger logger = LoggerFactory.getLogger(JsonHelper.class);

    /***
     * 获取 request 中 json 字符串的内容
     */
    public static String getRequestJson(HttpServletRequest request) throws IOException {
        String charEncoding = request.getCharacterEncoding();
        if (StringUtils.isBlank(charEncoding)) {
            charEncoding = "UTF-8";
        }

        byte[] bytes = null;
        if (StringUtils.equalsIgnoreCase(request.getMethod(), "GET")) {
            bytes = request.getQueryString().getBytes(charEncoding);
        } else {
            bytes = getRequestPostBytes(request);
        }

        return new String(bytes, charEncoding).replaceAll("%22", "\"");
    }

    /**
     * 描述:获取 post 请求的 byte[] 数组
     */
    public static byte[] getRequestPostBytes(HttpServletRequest request) throws IOException {
        int contentLength = request.getContentLength();
        if (contentLength < 0) {
            return null;
        }

        int i = 0;
        byte buffer[] = new byte[contentLength];
        while (i < contentLength) {
            int readlen = request.getInputStream().read(buffer, i, contentLength - i);
            if (readlen == -1) {
                break;
            }
            i += readlen;
        }
        return buffer;
    }

    public static <T> T jsonToObject(String json, Class<T> objectType) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(json, objectType);
    }

    public static <T> String objectToJson(T obj) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(obj);
    }

    public static <T> byte[] objectToBytes(T obj) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsBytes(obj);
    }
}
