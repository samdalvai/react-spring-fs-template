package com.memorynotes.controller;

import com.memorynotes.AppException;
import com.memorynotes.form.LoginForm;
import com.memorynotes.form.SignupForm;
import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api")
public class UserSignupController {

    UserRepository userRepository;

    public UserSignupController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public AuthController.CurrentUser signup(@Valid @RequestBody SignupForm form) {
        log.info("New user {} signing up", form);

        Optional<User> existingUser = userRepository.findUserByUsernameOrEmail(form.getUsername(), form.getEmail());

        if (!existingUser.isEmpty()) {
            log.info("User {} already signed up", form);
            throw new AppException("User with name '" + form.getUsername() + "' or email '" + form.getEmail() + "' already signed up");
        }

        return null;
    };

    public record RegisteredUser(Integer id, String username, String email) {
    }
}
