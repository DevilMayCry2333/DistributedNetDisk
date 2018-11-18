package com.joker.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class loginController {

    @RequestMapping(value = "/login")
    public void login(@RequestParam("name") String name){
        System.out.println("This is a test request");
    }
}
