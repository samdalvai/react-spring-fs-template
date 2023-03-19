package com.memorynotes.controller;

import com.memorynotes.authentication.LoginRequest;
import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // URL example: http://localhost:8080/login
    @PostMapping("/login")
    public ResponseEntity<?> createProvince(@RequestBody LoginRequest loginRequest) throws URISyntaxException {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findUserByEmailAndPassword(email, password);

        if (user != null) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}