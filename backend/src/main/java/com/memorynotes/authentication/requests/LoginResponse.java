package com.memorynotes.authentication.requests;

import com.memorynotes.model.User;

public class LoginResponse {

    String name;
    String email;

    public LoginResponse() {
    }

    public LoginResponse(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static LoginResponse fromUserData(User user) {
        return new LoginResponse(user.getName(), user.getEmail());
    }
}
