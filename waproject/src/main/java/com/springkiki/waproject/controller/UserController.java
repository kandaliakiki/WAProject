package com.springkiki.waproject.controller;

import java.util.ArrayList;
import java.util.List;

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
		userService.createUser(user);
		return "new user has been added";
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

}
