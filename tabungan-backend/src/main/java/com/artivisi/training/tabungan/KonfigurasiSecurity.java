package com.artivisi.training.tabungan;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.RemoteTokenServices;

@EnableWebSecurity(debug = true)
@EnableResourceServer
public class KonfigurasiSecurity extends ResourceServerConfigurerAdapter { 

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().authenticated();
    }

    @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        RemoteTokenServices remoteToken = new RemoteTokenServices();
        remoteToken.setClientId("tabunganapp");
        remoteToken.setClientSecret("app123456");
        remoteToken.setCheckTokenEndpointUrl("http://localhost:10000/oauth/check_token");
        resources.tokenServices(remoteToken);
    }
    
}
