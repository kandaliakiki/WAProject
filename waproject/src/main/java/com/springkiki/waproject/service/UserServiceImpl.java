package com.springkiki.waproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.User;
import com.springkiki.waproject.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUser() {
		return userRepository.findAll();
	}
	
	public Optional<User> getUserByID(int userID) {
		return userRepository.findById(userID);
	}

	public List<User> getAllOtherUser(int userID) {
		return userRepository.getAllOtherUser(userID);
	}
	
	public Integer loginCheck(String name , String password) {
		return userRepository.loginCheck(name, password);
	}
	
	public Integer checkExistName(String name) {
		return userRepository.checkExistName(name);
	}
	
	public User getUserByQuery(String name , String password) {
		return userRepository.getUserByQuery(name, password);
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	
}
