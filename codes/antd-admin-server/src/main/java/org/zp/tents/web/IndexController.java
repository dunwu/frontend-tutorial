/**
 * The Apache License 2.0
 * Copyright (c) 2016 Victor Zhang
 */
package org.zp.tents.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * 首页控制器
 *
 * @author Victor Zhang
 * @date 2017/1/11.
 */
@Controller
public class IndexController {
    /**
     * <p>返回 ModelAndView 对象到视图层。在本例中，视图解析器解析视图名为 index，会自动关联到 index.jsp。
     * <p>访问形式：http://localhost:8080/
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() {
        ModelAndView mav = new ModelAndView();
        mav.addObject("message", "欢迎访问 tents 首页");
        mav.setViewName("index");
        return mav;
    }
}
