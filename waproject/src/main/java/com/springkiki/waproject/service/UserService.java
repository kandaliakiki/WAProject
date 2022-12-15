package com.springkiki.waproject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;


public interface UserService {
	
	public User createUser(User user);
	
	public List<User> getAllUser();
}
