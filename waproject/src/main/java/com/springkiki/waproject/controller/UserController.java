package com.springkiki.waproject.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;
import com.springkiki.waproject.service.UserService;
import com.springkiki.waproject.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	UserServiceImpl userService;
	
	@PostMapping("/createUser")
	public String createUser(@RequestBody User user ) {
		if(userService.checkExistName(user.getName())>0) {
			return "user with same name existed";
		}
		userService.createUser(user);
		return "new user has been added";
	}
	
	@PostMapping("/updateUser")
	public String updateUser(@RequestBody User user ) {
		if(userService.checkExistName(user.getName())>0) {
			return "user with same name existed";
		}
		
		if(user.getName().length()<=0) {
			return "nama harus diisi";
		}
		
		if(user.getPassword().length()<=0) {
			return "password harus diisi";
		}
		userService.updateUser(user);
		return "user has been updated";
	}
	
	
	@GetMapping("/getAllUser")
	public List<User> getUser() {
		return userService.getAllUser();
	}
	
	@PostMapping("/getAllOtherUser")
	public String  getAllOtherUser(@RequestBody String params) {
		JSONObject param = new JSONObject(params);
		List<User> listUser = userService.getAllOtherUser(param.getInt("user1ID"));
		return createJSONReqAllOtherUser(listUser);
	}
	
	private String createJSONReqAllOtherUser(List<User> listUser) {
		List<JSONObject> hasiljson = new ArrayList<JSONObject>();
		for(int i = 0 ; i < listUser.size();i++) {
			JSONObject jsonMessage = new JSONObject();
			jsonMessage.put("userID", listUser.get(i).getUserID());
			jsonMessage.put("label", listUser.get(i).getName());
			hasiljson.add(jsonMessage);
		}
		return hasiljson.toString();
	}
	
	@PostMapping("/loginUser")
	public String  loginUser(@RequestBody String params) {
		JSONObject param = new JSONObject(params);
		Integer checkLogin = userService.loginCheck(param.getString("name"),param.getString("password"));
		if(checkLogin>0) {
			return "Login Successful";
		}
		return "Login Failed";
	}
	
	@PostMapping("/getUserByQuery")
	public User  getUserObject(@RequestBody String params) {
		JSONObject param = new JSONObject(params);
		return userService.getUserByQuery(param.getString("name"),param.getString("password"));
	}
	
	@PostMapping("/getUserByID")
	public Optional<User>  getUserByID(@RequestBody String params) {
		JSONObject param = new JSONObject(params);
		return userService.getUserByID(param.getInt("userID"));
	}


}
