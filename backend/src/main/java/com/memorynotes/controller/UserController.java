package com.memorynotes.controller;

import com.memorynotes.authentication.hash.PasswordUtils;
import com.memorynotes.authentication.requests.LoginRequest;
import com.memorynotes.authentication.requests.LoginResponse;
import com.memorynotes.authentication.requests.SignUpRequest;
import com.memorynotes.model.User;
import com.memorynotes.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws URISyntaxException {
        String requestEmail = loginRequest.getEmail();
        String requestPassword = loginRequest.getPassword();

        User user = userRepository.findUserByEmail(requestEmail);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }

        String userSalt = user.getSalt();
        String userPassword = user.getPassword();

        String hashedPasswordWithSalt = PasswordUtils.hashPassword(requestPassword + userSalt);

        if (hashedPasswordWithSalt.equals(userPassword)) {
            return ResponseEntity.status((HttpStatus.OK)).body(LoginResponse.fromUserData(user));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest signUpRequest) throws URISyntaxException {
        if (signUpRequest.getName() == null || signUpRequest.getName().isEmpty() ||
                signUpRequest.getEmail() == null || signUpRequest.getEmail().isEmpty() ||
                signUpRequest.getPassword() == null || signUpRequest.getPassword().isEmpty()
        ) {
            throw new IllegalArgumentException("Name and email fields are required");
        }

        User newUser = new User();
        newUser.setName(signUpRequest.getName());
        newUser.setEmail(signUpRequest.getEmail());

        String salt = PasswordUtils.generateSalt();
        newUser.setPassword(PasswordUtils.hashPassword(signUpRequest.getPassword() + salt));
        newUser.setSalt(salt);

        userRepository.save(newUser);

        return ResponseEntity.ok("User with ID " + newUser.getId() + " created.");
    }
}