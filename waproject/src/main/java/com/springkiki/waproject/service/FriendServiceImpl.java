package com.springkiki.waproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springkiki.waproject.model.Friend;
import com.springkiki.waproject.model.User;
import com.springkiki.waproject.repository.FriendRepository;

@Service
public class FriendServiceImpl implements FriendService {

	@Autowired
	FriendRepository friendRepository;
	
	@Override
	public Friend createFriend(Friend friend) {
		return friendRepository.save(friend);
	}

	@Override
	public List<Friend> getAllFriend() {
		return friendRepository.findAll();
	}
	
	public List<Integer> getFriendsByUser(int user1ID) {
		return friendRepository.getAllFriendsByUser(user1ID);
	}
	

}
