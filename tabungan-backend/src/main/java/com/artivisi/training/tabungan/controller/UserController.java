package com.artivisi.training.tabungan.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    
    @GetMapping("/api/user/me")
    @ResponseBody
    public Authentication currentUser(Authentication auth){
        return auth;
    }
    
    @RequestMapping("/login")
    public void loginPage(){}
}
