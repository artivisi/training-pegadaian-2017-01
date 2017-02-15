package com.artivisi.training.tabungan;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class KonfigurasiSecurity extends WebSecurityConfigurerAdapter {

    @Autowired private DataSource dataSource;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests().anyRequest().authenticated()
                .and().formLogin();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery("select username, password, active as enabled from s_user where username=?")
                .authoritiesByUsernameQuery("select u.username, p.name as authority " +
                "from s_user u " +
                "inner join s_user_role ur on u.id = ur.id_user " +
                "inner join s_role r on r.id = ur.id_role " +
                "inner join s_role_permission rp on r.id = rp.id_role " +
                "inner join s_permission p on p.id = rp.id_permission " +
                "where u.username=?");
    }  
}
