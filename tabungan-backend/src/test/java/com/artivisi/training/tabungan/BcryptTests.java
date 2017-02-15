package com.artivisi.training.tabungan;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptTests {
    
    @Test
    public void testEncode(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        String password = "u00123";
        String hash = encoder.encode(password);
        System.out.println("Hash : "+hash);
        
        Assert.assertTrue(encoder.matches(password, hash));
    }
}
