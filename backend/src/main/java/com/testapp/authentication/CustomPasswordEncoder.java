package com.testapp.authentication;

import com.testapp.authentication.hash.HashUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomPasswordEncoder implements PasswordEncoder {
    private static final PasswordEncoder INSTANCE = new CustomPasswordEncoder();

    private static final int SALT_LENGTH = 16;

    private CustomPasswordEncoder() {
    }

    public String encode(CharSequence rawPassword) {
        String salt = HashUtils.generateSalt(SALT_LENGTH);

        return HashUtils.hashPassword(rawPassword.toString() + salt) + "$" + salt;
    }

    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        String salt = extractSalt(encodedPassword);
        String hashedPassword = HashUtils.hashPassword(rawPassword.toString() + salt) + "$" + salt;

        return hashedPassword.equals(encodedPassword);
    }

    private String extractSalt(String encodedPassword) {
        return encodedPassword.substring(encodedPassword.indexOf('$') + 1);
    }

    public static PasswordEncoder getInstance() {
        return INSTANCE;
    }
}
