package com.springkiki.waproject.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springkiki.waproject.model.Friend;
import com.springkiki.waproject.model.User;
import com.springkiki.waproject.service.FriendService;
import com.springkiki.waproject.service.FriendServiceImpl;
import com.springkiki.waproject.service.UserServiceImpl;

@RestController
@RequestMapping("/friend")
@CrossOrigin
public class FriendController {

	@Autowired
	FriendServiceImpl friendService;
	
	@Autowired
	UserServiceImpl userService;
	
	@PostMapping("/createFriend")
	public String createFriend(@RequestBody Friend friend ) {
		if(friendService.checkFriendExist(friend.getUser1ID(), friend.getUser2ID())>0) {
			return "friend already exist";
		}
		
		if(userService.getUserByID(friend.getUser1ID()).isEmpty() || userService.getUserByID(friend.getUser2ID()).isEmpty()) {
			return "user doesnt exist";
		}
		friendService.createFriend(friend);
		return "new friend has been added";
	}
	
	@GetMapping("/getAllFriend")
	public List<Friend> getFriend() {
		System.out.println("masuk sini");
		return friendService.getAllFriend();
	}
	
	@PostMapping("/getFriendByUser")
	public List<Optional<User>> getFriendsByUser( @RequestBody String params ) {
		JSONObject param = new JSONObject(params);
		List<Integer> listFriendID = friendService.getFriendsByUser(param.getInt("user1ID"));
		List<Optional<User>> listUserObj = new ArrayList<Optional<User>>();
		for(int i = 0 ; i < listFriendID.size();i++) {
			listUserObj.add(userService.getUserByID(listFriendID.get(i)));
		}
		return listUserObj;
	}
	
	@PostMapping("/deleteFriend")
	public String deleteFriend(@RequestBody String params ) {
		JSONObject param = new JSONObject(params);
		if(friendService.checkFriendExist(param.getInt("user1ID"), param.getInt("user2ID"))<=0) {
			return "friend doesnt exist";
		}
		
		if(userService.getUserByID(param.getInt("user1ID")).isEmpty() || userService.getUserByID(param.getInt("user2ID")).isEmpty()) {
			return "user doesnt exist";
		}
	
		try {
			friendService.deleteFriend(friendService.getFriend(param.getInt("user1ID"), param.getInt("user2ID"))) ;
		} catch (Exception e) {
			return "ada eror: "+e.getMessage();
		}
		return "friend has been deleted";
	}
	
}
