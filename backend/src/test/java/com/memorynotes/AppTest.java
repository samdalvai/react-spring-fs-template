package com.memorynotes;

import com.memorynotes.authentication.CustomPasswordEncoder;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

class AppTest {
  @Test
  void testGeneratePassword() {
    var encoder = CustomPasswordEncoder.getInstance();
    var password = encoder.encode("password");
    Assertions.assertTrue(encoder.matches("password", password));
    System.out.println("password: " + password);
  }
}
