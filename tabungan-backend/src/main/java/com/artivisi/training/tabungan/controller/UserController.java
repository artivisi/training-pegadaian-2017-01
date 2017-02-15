package com.artivisi.training.tabungan.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @GetMapping("/me")
    public Authentication currentUser(Authentication auth){
        return auth;
    }
}
