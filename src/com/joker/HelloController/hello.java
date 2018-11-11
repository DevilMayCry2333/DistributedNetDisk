package com.joker.HelloController;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;

@Controller
public class hello {
    public static void main(String[] args){
        ApplicationContext acx = new ClassPathXmlApplicationContext("beans.xml");
        Person p = acx.getBean("person",Person.class);
        p.useAxe();
    }


}
