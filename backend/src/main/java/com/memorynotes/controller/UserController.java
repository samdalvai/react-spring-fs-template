package com.memorynotes.controller;

import com.memorynotes.authentication.LoginRequest;
import com.memorynotes.authentication.SignUpRequest;
import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws URISyntaxException {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findUserByEmailAndPassword(email, password);

        if (user != null) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> singnup(@RequestBody SignUpRequest signUpRequest) throws URISyntaxException {
        User newUser = new User();
        newUser.setName(signUpRequest.getName());
        newUser.setEmail(signUpRequest.getEmail());
        newUser.setPassword(signUpRequest.getPassword());

        userRepository.save(newUser);

        return ResponseEntity.ok("User with ID " + newUser.getId() + " created.");
    }
}