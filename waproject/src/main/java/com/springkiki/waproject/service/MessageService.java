package com.springkiki.waproject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.Message;


public interface MessageService {
	
	public Message createMessage(Message message);
	
	public List<Message> getAllMessage();
}
