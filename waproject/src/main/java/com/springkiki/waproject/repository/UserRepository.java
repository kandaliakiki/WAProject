package com.springkiki.waproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
