package com.memorynotes.controller;

import com.memorynotes.AppException;
import com.memorynotes.form.LoginForm;
import com.memorynotes.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@DependsOn("securityFilterChain")
public class AuthController {


    private final RememberMeServices rememberMeServices;

    public AuthController(RememberMeServices rememberMeServices) {
        this.rememberMeServices = rememberMeServices;
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
        System.out.println("User: " + user);
        log.info("User {} logged in.", user.getUsername());

        rememberMeServices.loginSuccess(request, response, auth);
        return new CurrentUser(user.getId(), user.getUsername(), user.getEmail());
    }

    @PostMapping("/logout")
    public LogoutResponse logout(HttpServletRequest request) throws ServletException {
        request.logout();
        return new LogoutResponse();
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
