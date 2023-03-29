package com.personalproject.TekTaco.security;

import com.personalproject.TekTaco.security.jwt.AuthEntryPointJwt;
import com.personalproject.TekTaco.security.jwt.JwtAuthFilter;
import jakarta.servlet.DispatcherType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.Customizer.*;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Bean
    public JwtAuthFilter authenticationJwtTokenFilter() {
        return new JwtAuthFilter();
    }

    @Bean
    UserDetailsService userDetailsService() {
        return new UserInfoServiceImpl();
    }
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    @Bean
    public AuthenticationManager authManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider daoAuthProvider = new DaoAuthenticationProvider();
        daoAuthProvider.setUserDetailsService(userDetailsService());
        daoAuthProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthProvider;
    }
    private static final String[] allowedRequests = {
            "/api/v1/menuItems/**",
            "/api/v1/admin/users",
            "/api/v1/admin/user",
            "/api/v1/admin/login",
            "/api/v1/admin/logout",
            "/v3/api-docs/**",
            "/swagger-resources/**",
            "/swagger-ui/**",
            "/webjars/**",
<<<<<<< HEAD
=======
            "/"
>>>>>>> 4e1a793d41195dd0254a8570020632dfdc1698ec
    };

    private static final String[] authorizedRequests = {
            "/api/v1/review",
            "/api/v1/admin/users/**",
            "/api/v1/admin/user/**",
<<<<<<< HEAD
            "/api/v1/order"
=======
            "/api/v1/order",
>>>>>>> 4e1a793d41195dd0254a8570020632dfdc1698ec


    };

    String[] allowedOrigins = {"http://localhost:3000", "https://localhost:3000"};
<<<<<<< HEAD
    String[] allowedHeaders = {"Access-Control-Allow-Origin"};
=======

>>>>>>> 4e1a793d41195dd0254a8570020632dfdc1698ec
    String[] allowedMethods = {"POST", "PUT", "GET", "DELETE"};
    String[] allowedHeaders = {"Access-Control-Allow-Origin"};


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors(withDefaults())
                .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .authorizeHttpRequests().requestMatchers(allowedRequests).permitAll()
                .and()
                .authorizeHttpRequests()
                .requestMatchers(authorizedRequests).permitAll()
                .anyRequest()
                .authenticated();

        http.authenticationProvider(authProvider());

        http.addFilterAfter(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigSource() {
        CorsConfiguration cors = new CorsConfiguration();
        cors.setAllowCredentials(true);
        cors.setAllowedHeaders(List.of(allowedHeaders));
        cors.setAllowedOrigins(List.of(allowedOrigins));
        cors.setAllowedMethods(List.of(allowedMethods));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", cors);
        return source;
    }


}