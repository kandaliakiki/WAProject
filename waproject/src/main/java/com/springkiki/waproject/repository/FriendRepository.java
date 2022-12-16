package com.springkiki.waproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springkiki.waproject.model.Friend;
import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Integer>{

	@Query(value =   "select user2id from friend f where user1id = :user1ID", nativeQuery = true)
	List<Integer> getAllFriendsByUser(int user1ID);
	
	@Query(value =   "select *  from friend f where user1id = :user1ID and user2id = :user2ID", nativeQuery = true)
	Friend getFriend(int user1ID, int user2ID);
	
	@Query(value =   "select count(*)  from friend f where user1id = :user1ID and user2id = :user2ID", nativeQuery = true)
	Integer checkFriendExist(int user1ID, int user2ID);
} 
