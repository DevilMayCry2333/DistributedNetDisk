package com.joker.HelloController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @BLOG http://www.cnblogs.com/goodcheap
 * @DESCRIBE
 * @AUTHOR WángChéngDá
 * @DATE 2017-03-08 12:19
 */
@Controller
public class HelloWorld {

    private final static String SUCCESS = "success";

    /**
     * 1.使用 @RequestMapping 注解来映射请求的 URL。
     * 2.返回值会通过试图解析器解析为实际的物理视图, InternalResourceViewResolver 试图解析器是
     * 通过 prefix + returnVal + suffix 这样的方式得到实际的物理视图, 然后做转发操作。
     *
     * /WEB-INF/views/ + success + .jsp
     *
     * @return
     */
    @RequestMapping("/helloworld")
    public String hell() {
        System.out.println("hello world!");
        return SUCCESS;
    }
}