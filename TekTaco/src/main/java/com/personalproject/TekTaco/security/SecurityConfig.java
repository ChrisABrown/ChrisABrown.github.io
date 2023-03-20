package com.personalproject.TekTaco.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    String[] allowedRequests = {"/api/v1/menuItems/**", "/api/v1/admin/new-user"};
    String[] authorizedRequests = {"/api/v1/reviews", "/api/v1/admin/**"};
    String[] allowedOrigins = {"http://localhost:3000"};
    String[] allowedMethods = {"POST", "PUT", "GET", "DELETE"};

    @Bean
    UserDetailsService userDetailsService(){
        return new UserInfoUserDetailsService();
    };

//    @Autowired
//    public void configAuthBuilder(AuthenticationManagerBuilder builder) throws Exception {
//        builder.userDetailsService(userDetailsService());
//    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//        http.cors(withDefaults())
//                .authorizeHttpRequests()
//                .requestMatchers(allowedRequests).permitAll()
//                .and()
//                .authorizeHttpRequests().requestMatchers(authorizedRequests).hasRole("ROLE_ADMIN")
//                .and().formLogin()
//                .and().httpBasic();

        http.cors(withDefaults())
                .csrf().disable()
                .authorizeHttpRequests().requestMatchers(allowedRequests).permitAll()
                .and()
                .authorizeHttpRequests().requestMatchers(authorizedRequests).hasAuthority("ROLE_ADMIN")
                .and()
                .formLogin().and().httpBasic();

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigSource() {
        CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowedOrigins(List.of(allowedOrigins));
        cors.setAllowedMethods(List.of(allowedMethods));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);
        return source;
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider daoAuthProvider = new DaoAuthenticationProvider();
        daoAuthProvider.setUserDetailsService(userDetailsService());
        daoAuthProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthProvider;
    }
}
