/**
 * The Apache License 2.0
 * Copyright (c) 2016 Victor Zhang
 */
package org.zp.tents.web.api;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author Victor Zhang
 * @date 2017/1/11.
 */
public class ResponseDTO<T> {
    private Integer code;
    private final List<String> messages;
    private T data;

    public ResponseDTO() {
        this.code = Integer.valueOf(ResponseCodeEnum.SUCCESS.code());
        this.messages = new ArrayList();
        this.addError(ResponseCodeEnum.SUCCESS.message());
    }

    public ResponseDTO(T data) {
        this.code = Integer.valueOf(ResponseCodeEnum.SUCCESS.code());
        this.messages = new ArrayList();
        this.addError(ResponseCodeEnum.SUCCESS.message());
        this.data = data;
    }

    public ResponseDTO(ResponseCodeEnum codeType) {
        this.code = Integer.valueOf(codeType.code());
        this.messages = new ArrayList();
        this.addError(codeType.message());
    }

    public void addError(String error) {
        this.messages.add(error);
    }

    public void addErrors(String[] errors) {
        this.addErrors(Arrays.asList(errors));
    }

    public void addErrors(List<String> errorList) {
        this.messages.addAll(errorList);
    }

    public void removeError(String error) {
        this.messages.remove(error);
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public List<String> getMessages() {
        return messages;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public enum ResponseCodeEnum {
        SUCCESS(0, "成功"),
        ERR_REQUEST_PARAMS(1001, "请求参数错误"),
        FAIL(-1, "失败");

        private final Integer code;
        private final String message;

        ResponseCodeEnum(int code, String message) {
            this.code = Integer.valueOf(code);
            this.message = message;
        }

        public Integer code() {
            return code;
        }

        public String message() {
            return message;
        }
    }
}
