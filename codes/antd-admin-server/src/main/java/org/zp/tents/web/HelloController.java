package org.zp.tents.web;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zp.tents.tools.JsonHelper;
import org.zp.tents.web.api.PersonDTO;
import org.zp.tents.web.api.ResponseDTO;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * spring mvc 的第一个程序
 * 本控制器使用 SpringMVC 注解，以及动态绑定来处理 HTTP 请求
 *
 * @author vicotr zhang
 * @since 2016.07.29
 */
@Controller
@RequestMapping("/hello")
public class HelloController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ResponseBody
    @RequestMapping(value = "/world", method = RequestMethod.GET)
    public ResponseDTO<String> helloWorld(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return new ResponseDTO("Hello World");
    }

    @ResponseBody
    @RequestMapping(value = "/person", method = RequestMethod.POST)
    public ResponseDTO<PersonDTO> helloPerson(@RequestBody PersonDTO person, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        return new ResponseDTO(person);
    }

    /**
     * 解析 Json 请求
     *
     * @param request
     * @param response
     * @return
     * @throws IOException
     */
    @ResponseBody
    @RequestMapping(value = "/json")
    public ResponseDTO<String> helloJson(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String inputJson = JsonHelper.getRequestJson(request);
        PersonDTO person = JsonHelper.jsonToObject(inputJson, PersonDTO.class);
        logger.info("json内容：{]", inputJson);
        response.setHeader("Access-Control-Allow-Origin", "*");
        return new ResponseDTO(inputJson);
    }

    /**
     * <p>测试 logback 分级日志。配置项见src/main/resouces/logback.xml
     * <p>访问形式：http://localhost:8080/hello/log?info=xxxx
     */
    @ResponseBody
    @RequestMapping(value = "/log", method = RequestMethod.GET)
    public ResponseDTO<String> helloLog(@RequestParam(value = "info", required = false) String loginfo) {
        if (StringUtils.isBlank(loginfo)) {
            return new ResponseDTO("没有日志信息");
        }
        logger.trace(loginfo);
        logger.debug(loginfo);
        logger.info(loginfo);
        logger.warn(loginfo);
        logger.error(loginfo);
        return new ResponseDTO(String.format("打印日志内容：{%s} 成功", loginfo));
    }
}
