package com.testapp.authentication;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomPasswordEncoderTest {

    @Test
    void testPasswordWithSaltMatches() {
        var encoder = CustomPasswordEncoder.getInstance();
        String hashedPasswordWithSalt = "a850c6ccfb92cba03f7fb1b0fb1158fb$62bb083487480eec82cb5df74431a14a";
        assertTrue(encoder.matches("password", hashedPasswordWithSalt));
    }

    @Test
    void testPasswordWithSaltDoesNotMatch() {
        var encoder = CustomPasswordEncoder.getInstance();
        String hashedPasswordWithSalt = "a850c6Ccfb92cba03f7fb1b0fb1158fb$62bb083487480eec82cb5df74431a14a";
        assertFalse(encoder.matches("password", hashedPasswordWithSalt));
    }

    @Test
    void testPasswordGeneration() {
        var encoder = CustomPasswordEncoder.getInstance();
        String password = "password";
        String generatedPassword = encoder.encode(password);
        assertTrue(generatedPassword.contains("$"));
        assertEquals(65, generatedPassword.length());
    }

    @Test
    void testNoTwoPasswordsGeneratedEqual() {
        var encoder = CustomPasswordEncoder.getInstance();
        String password = "password";
        String generatedPassword1 = encoder.encode(password);
        String generatedPassword2 = encoder.encode(password);

        assertNotEquals(generatedPassword1, generatedPassword2);
    }

}