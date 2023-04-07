package com.memorynotes.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// Enables cross-origin requests from localhost, should be removed in production
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns("http://localhost:3000", "http://localhost:3001", "https://*.eu.ngrok.io")
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}