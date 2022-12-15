package com.springkiki.waproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springkiki.waproject.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer>{

}
