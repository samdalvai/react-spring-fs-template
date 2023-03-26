package com.memorynotes.authentication;

import com.memorynotes.hash.HashUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPasswordEncoder implements PasswordEncoder {
    private static final PasswordEncoder INSTANCE = new CustomPasswordEncoder();

    private CustomPasswordEncoder() {
    }

    public String encode(CharSequence rawPassword) {
        return HashUtils.hashPassword(rawPassword.toString());
    }

    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encode(rawPassword).equals(encodedPassword);
    }

    public static PasswordEncoder getInstance() {
        return INSTANCE;
    }
}
