package com.memorynotes.controller;

import com.memorynotes.model.User;
import org.springframework.context.annotation.DependsOn;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
@DependsOn("securityFilterChain")
public class TestController {

    @GetMapping("/test")
    public ResponseEntity<?> test(@AuthenticationPrincipal User user) throws URISyntaxException {
        return ResponseEntity.status((HttpStatus.OK)).body("Hello, this is a test");
    }

}
