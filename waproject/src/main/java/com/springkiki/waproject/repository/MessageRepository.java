package com.springkiki.waproject.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springkiki.waproject.model.Message;

import jakarta.transaction.Transactional;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer>{
	@Query(value =   "select current_timestamp", nativeQuery = true)
	Timestamp getCreatedMessage();
	
	@Query(value =   "select * from message where senderid in (:user1ID,:user2ID) and "
			+ "receiverid in (:user1ID,:user2ID) order by messageid ", nativeQuery = true)
	List<Message> getMessageBetweenUsers(int user1ID, int user2ID);
	
	@Query(value =   "select * from message where senderid in (:user1ID,:user2ID) and "
			+ "receiverid in (:user1ID,:user2ID) order by messageid desc limit 1 ", nativeQuery = true)
	Message getLastMessageBetweenUsers(int user1ID, int user2ID);
	
	@Query(value =   " "
			+ "select COUNT(*) from message where senderid in (:user1ID,:user2ID) and  "
			+ "receiverid in (:user1ID,:user2ID) and  "
			+ "(case when :user1ID=receiverid then readbyreceiver ='N'  "
			+ "when :user1ID= senderid then readbysender='N' end )  "
			+ "order by messageid ", nativeQuery = true)
	Integer getCountUnread(int user1ID, int user2ID);
	
	@Modifying
	@Transactional
	@Query( value = "update message set readbyreceiver ='Y'  "
			+ "where senderid in (:user1ID,:user2ID) and   "
			+ "receiverid in (:user1ID,:user2ID) and receiverid = :user1ID ",nativeQuery = true )
	int updateRead(int user1ID, int user2ID);
}
