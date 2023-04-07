package com.memorynotes.controller;

import com.memorynotes.form.LoginForm;
import com.memorynotes.form.SignupForm;
import com.memorynotes.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserSignupController {

    UserRepository userRepository;

    public UserSignupController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public AuthController.CurrentUser signup(@Valid @RequestBody SignupForm form) {


        return null;
    };

    public record RegisteredUser(Integer id, String username, String email) {
    }
}
