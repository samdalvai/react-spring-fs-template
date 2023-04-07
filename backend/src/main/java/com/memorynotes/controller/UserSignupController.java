package com.memorynotes.controller;

import com.memorynotes.AppException;
import com.memorynotes.authentication.CustomPasswordEncoder;
import com.memorynotes.form.SignupForm;
import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
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
    public RegisteredUser signup(@Valid @RequestBody SignupForm form) {
        log.info("New user {} signing up", form);

        Optional<User> existingUser = userRepository.findUserByUsernameOrEmail(form.getUsername(), form.getEmail());

        if (!existingUser.isEmpty()) {
            log.info("User {} already signed up", form);
            throw new AppException("User with name '" + form.getUsername() + "' or email '" + form.getEmail() + "' already signed up");
        }

        PasswordEncoder encoder = CustomPasswordEncoder.getInstance();
        String encryptedPassword = encoder.encode(form.getPassword());

        User newUser = new User(form.getUsername(), form.getEmail(), encryptedPassword, new Date());

        userRepository.save(newUser);

        log.info("User {} successfully signed up", form);

        return new RegisteredUser(newUser.getId(), newUser.getUsername(), newUser.getEmail());
    };

    public record RegisteredUser(Integer id, String username, String email) {
    }
}
