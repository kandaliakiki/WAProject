package com.springkiki.waproject.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springkiki.waproject.model.Friend;
import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;
import com.springkiki.waproject.service.FriendServiceImpl;
import com.springkiki.waproject.service.MessageService;
import com.springkiki.waproject.service.MessageServiceImpl;
import com.springkiki.waproject.service.UserServiceImpl;

@RestController
@RequestMapping("/message")
public class MessageController {

	@Autowired
	MessageServiceImpl messageService;
	
	@Autowired
	UserServiceImpl userService;
	
	@PostMapping("/createMessage")
	public String createMessage(@RequestBody Message message ) {
		
		message.setCreated(messageService.getCreatedMessage());
		messageService.createMessage(message);
		return "new message has been added";
	}
	
	@GetMapping("/getAllMessage")
	public List<Message> getMessage() {
		return messageService.getAllMessage();
	}
	
	@PostMapping("/getMessage2Users")
	public String getMessage2Users(@RequestBody String params) {
		JSONObject param = new JSONObject(params);
		String username1 = userService.getUserByID(param.getInt("user1ID")).orElse(null).getName();
		String username2 = userService.getUserByID(param.getInt("user2ID")).orElse(null).getName();
		
		return createJSONReqString(username1, username2, param.getInt("user1ID"), param.getInt("user2ID"));
	}
	
	public String createJSONReqString(String username1, String username2, int user1ID, int user2ID) {
		List<Message> allMessages = messageService.getMessageBetweenUsers(user1ID, user2ID);
		List<JSONObject> hasiljson = new ArrayList<JSONObject>();
		for(int i = 0 ; i < allMessages.size();i++) {
			JSONObject jsonMessage = new JSONObject();
			if(allMessages.get(i).getSenderID()==user1ID) {
				jsonMessage.put("sender", username1);
				jsonMessage.put("receiver", username2);
			}else {
				jsonMessage.put("sender", username2);
				jsonMessage.put("receiver", username1);
			}
			jsonMessage.put("message", allMessages.get(i).getMessage());
			jsonMessage.put("created", allMessages.get(i).getCreated());
			jsonMessage.put("messageID",allMessages.get(i).getMessageID());
			hasiljson.add(jsonMessage);
		}
		return hasiljson.toString();
	}
}
