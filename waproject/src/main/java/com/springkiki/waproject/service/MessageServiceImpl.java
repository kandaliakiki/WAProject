package com.springkiki.waproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.repository.MessageRepository;

@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	MessageRepository messageRepository;
	
	@Override
	public Message createMessage(Message message) {
		return messageRepository.save(message);
	}

	@Override
	public List<Message> getAllMessage() {
		return messageRepository.findAll();
	}

}
