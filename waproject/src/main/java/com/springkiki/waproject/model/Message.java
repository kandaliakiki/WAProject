package com.springkiki.waproject.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int messageID;
	private int senderID;
	private int receiverID;
	private String message;
	private Timestamp created;
	
	@Column(columnDefinition = "varchar(2) default 'N'")
	private String readbysender;
	
	@Column(columnDefinition = "varchar(2) default 'N'")
	private String readbyreceiver;
	

	public String getReadbysender() {
		return readbysender;
	}
	public void setReadbysender(String readbysender) {
		this.readbysender = readbysender;
	}
	public String getReadbyreceiver() {
		return readbyreceiver;
	}
	public void setReadbyreceiver(String readbyreceiver) {
		this.readbyreceiver = readbyreceiver;
	}
	public Timestamp getCreated() {
		return created;
	}
	public void setCreated(Timestamp created) {
		this.created = created;
	}
	public int getMessageID() {
		return messageID;
	}
	public void setMessageID(int messageID) {
		this.messageID = messageID;
	}
	public int getSenderID() {
		return senderID;
	}
	public void setSenderID(int senderID) {
		this.senderID = senderID;
	}
	public int getReceiverID() {
		return receiverID;
	}
	public void setReceiverID(int receiverID) {
		this.receiverID = receiverID;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	} 
	
	
}
