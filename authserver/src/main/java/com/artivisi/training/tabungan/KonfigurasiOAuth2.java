package com.artivisi.training.tabungan;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;

@Configuration
public class KonfigurasiOAuth2 {
    
    @EnableAuthorizationServer
    protected static class KonfigurasiAuthServer extends AuthorizationServerConfigurerAdapter {

        @Override
        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
            clients.inMemory()
                    .withClient("tabunganapp")
                    .secret("app123456")
                    .authorizedGrantTypes("authorization_code", "refresh_token")
                    .scopes("list-users","user-info")
                    .authorities("OAUTH_CLIENT")
                    .accessTokenValiditySeconds(180);
        }

        @Override
        public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
            security.checkTokenAccess("hasAuthority('OAUTH_CLIENT')");
        }
        
        
        
    }
}
