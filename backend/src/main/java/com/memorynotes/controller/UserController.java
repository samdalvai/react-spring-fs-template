package com.memorynotes.controller;

import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/login")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // URL example: http://localhost:8080/users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}