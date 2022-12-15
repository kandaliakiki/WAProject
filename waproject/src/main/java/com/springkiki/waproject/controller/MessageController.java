package com.springkiki.waproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.service.MessageService;

@RestController
@RequestMapping("/message")
public class MessageController {

	@Autowired
	MessageService messageService;
	
	@PostMapping("/createMessage")
	public String createMessage(@RequestBody Message message ) {
		messageService.createMessage(message);
		return "new message has been added";
	}
	
	@GetMapping("/getAllMessage")
	public List<Message> getMessage() {
		return messageService.getAllMessage();
	}
}
