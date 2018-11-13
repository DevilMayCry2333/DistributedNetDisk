package com.joker.HelloController;

public class Person {
    private Axe axe;
    public void setAxe(Axe axe){
        this.axe = axe;
    }
    public void useAxe(){
        System.out.println("我正打算去砍柴");
    }
}
