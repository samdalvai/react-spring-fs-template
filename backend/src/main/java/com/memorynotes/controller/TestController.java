package com.memorynotes.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
public class TestController {

    @GetMapping("/test")
    public ResponseEntity<?> test() throws URISyntaxException {
        return ResponseEntity.status((HttpStatus.OK)).body("Hello, this is a test");
    }

}
