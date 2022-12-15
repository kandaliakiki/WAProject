package com.springkiki.waproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Friend {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int friendID;
	private int user1ID; 
	private int user2ID;
	public int getFriendID() {
		return friendID;
	}
	public void setFriendID(int friendID) {
		this.friendID = friendID;
	}
	public int getUser1ID() {
		return user1ID;
	}
	public void setUser1ID(int user1id) {
		user1ID = user1id;
	}
	public int getUser2ID() {
		return user2ID;
	}
	public void setUser2ID(int user2id) {
		user2ID = user2id;
	} 
	
	
}
