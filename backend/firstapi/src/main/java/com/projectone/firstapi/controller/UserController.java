package com.projectone.firstapi.controller;

import com.projectone.firstapi.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // Allow Angular to connect

public class UserController {

    @PostMapping
    public String createUser(@RequestBody User user) {
        System.out.println("Received user: " + user);
//        return "User received: " + user.getName();
        return "User received: " + user.getName() + " (" + user.getEmail() + ")";
    }
}
