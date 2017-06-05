package org.zp.tents.web;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zp.tents.web.api.ResponseDTO;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

/**
 * @author victor zhang
 * @date 2017/6/1.
 */
@Controller
@RequestMapping("/api")
public class ApiController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private boolean isLogined = false;

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseDTO<String> login(HttpServletRequest request, HttpServletResponse response) {
        logger.info("收到{}请求!", request.getRequestURI());
        ResponseDTO responseDTO;
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)) {
            if (username.equalsIgnoreCase("guest") && password.equalsIgnoreCase("guest")) {
                synchronized(this) {
                    isLogined = true;
                }
                responseDTO = new ResponseDTO("login success");
            } else {
                responseDTO = new ResponseDTO(ResponseDTO.ResponseCodeEnum.ERR_REQUEST_PARAMS);
            }
        } else {
            responseDTO = new ResponseDTO(ResponseDTO.ResponseCodeEnum.ERR_REQUEST_PARAMS);
            responseDTO.addError("username or passwrod is wrong.");
        }
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        return responseDTO;
    }

    @ResponseBody
    @RequestMapping(value = "/check", method = RequestMethod.GET)
    public ResponseDTO<Boolean> check(HttpServletRequest request, HttpServletResponse response) {
        logger.info("收到{}请求!", request.getRequestURI());
        ResponseDTO responseDTO;
        if (isLogined) {
            responseDTO = new ResponseDTO(true);
        } else {
            responseDTO = new ResponseDTO(false);
        }
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        return responseDTO;
    }

    @ResponseBody
    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public ResponseDTO<Boolean> logout(HttpServletRequest request, HttpServletResponse response) {
        logger.info("收到{}请求!", request.getRequestURI());
        ResponseDTO responseDTO = new ResponseDTO();
        synchronized(this) {
            isLogined = false;
        }
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        return responseDTO;
    }

    private String charReader(HttpServletRequest request) throws IOException {
        BufferedReader br = request.getReader();
        String str, wholeStr = "";
        while((str = br.readLine()) != null){
            wholeStr += str;
        }

        return wholeStr;
    }

    void binaryReader(HttpServletRequest request) throws IOException {
        int len = request.getContentLength();
        ServletInputStream iii = request.getInputStream();
        byte[] buffer = new byte[len];
        iii.read(buffer, 0, len);
    }
}
