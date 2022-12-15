package com.springkiki.waproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springkiki.waproject.model.User;
import com.springkiki.waproject.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/createUser")
	public String createUser(@RequestBody User user ) {
		userService.createUser(user);
		return "new user has been added";
	}
	
	@GetMapping("/getAllUser")
	public List<User> getUser() {
		return userService.getAllUser();
	}
}
