package com.memorynotes.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello")
public class HelloWorldController {
    
    // URL example: http://localhost:8080/cities
    @GetMapping
    public String hello() {
        return "Hello World!";
    }
}
