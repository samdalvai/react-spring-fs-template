package com.memorynotes.controller;

import com.memorynotes.authentication.LoginRequest;
import com.memorynotes.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // URL example: http://localhost:8080/users
    @PostMapping("/login")
    public ResponseEntity<?> createProvince(@RequestBody LoginRequest loginRequest) throws URISyntaxException {
        System.out.println("loginrequest: " + loginRequest);
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        System.out.println("name or email: " + email);
        System.out.println("password: " + password);

        return ResponseEntity.ok("Login successful!");
    }
}