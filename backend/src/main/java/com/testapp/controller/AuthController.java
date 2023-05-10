package com.testapp.controller;

import com.testapp.AppException;
import com.testapp.authentication.CustomPasswordEncoder;
import com.testapp.form.LoginForm;
import com.testapp.form.SignupForm;
import com.testapp.model.User;
import com.testapp.repository.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@DependsOn("securityFilterChain")
public class AuthController {


    private final RememberMeServices rememberMeServices;
    UserRepository userRepository;

    public AuthController(RememberMeServices rememberMeServices, UserRepository userRepository) {
        this.rememberMeServices = rememberMeServices;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public CurrentUser login(@Valid @RequestBody LoginForm form, BindingResult bindingResult,
                             HttpServletRequest request, HttpServletResponse response) {

        if (request.getUserPrincipal() != null) {
            throw new AppException("Please logout first.");
        }

        if (bindingResult.hasErrors()) {
            throw new AppException("Invalid username or password");
        }

        try {
            request.login(form.getUsername(), form.getPassword());
        } catch (ServletException e) {
            throw new AppException("Invalid username or password");
        }

        var auth = (Authentication) request.getUserPrincipal();
        var user = (User) auth.getPrincipal();
        log.info("User {} logged in.", user.getUsername());

        rememberMeServices.loginSuccess(request, response, auth);
        return new CurrentUser(user.getId(), user.getUsername(), user.getEmail());
    }

    @PostMapping("/logout")
    public LogoutResponse logout(HttpServletRequest request) throws ServletException {
        var auth = (Authentication) request.getUserPrincipal();
        var user = (User) auth.getPrincipal();
        log.info("User {} logged out.", user.getUsername());

        request.logout();

        return new LogoutResponse();
    }

    @PostMapping("/signup")
    public CurrentUser signup(@Valid @RequestBody SignupForm form) {
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

        return new CurrentUser(newUser.getId(), newUser.getUsername(), newUser.getEmail());
    }

    @GetMapping("/user")
    public CurrentUser getCurrentUser(@AuthenticationPrincipal User user) {
        return new CurrentUser(user.getId(), user.getUsername(), user.getEmail());
    }

  /*@GetMapping("/csrf")
  public CsrfResponse csrf(HttpServletRequest request) {
    var csrf = (CsrfToken) request.getAttribute("_csrf");
    return new CsrfResponse(csrf.getToken());
  }*/

    public record CurrentUser(Integer id, String username, String email) {
    }

    public record LogoutResponse() {
    }

    public record CsrfResponse(String token) {
    }
}
