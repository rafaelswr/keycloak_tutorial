package com.rafaelswr.oauth2pkcedemo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class HomeController {

    @GetMapping("/home")
    @ResponseStatus(HttpStatus.OK)
    public String sayHello(){
        return "Hello";
    }

}
