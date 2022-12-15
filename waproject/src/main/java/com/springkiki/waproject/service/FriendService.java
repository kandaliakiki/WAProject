package com.springkiki.waproject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.Friend;
import com.springkiki.waproject.model.Message;


public interface FriendService {
	
	public Friend createFriend(Friend friend);
	
	public List<Friend> getAllFriend();
}
