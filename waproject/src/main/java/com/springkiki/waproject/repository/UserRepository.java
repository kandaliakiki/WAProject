package com.springkiki.waproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springkiki.waproject.model.Message;
import com.springkiki.waproject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	@Query(value =   "select * from user where userid <> :user1ID", nativeQuery = true)
	List<User> getAllOtherUser(int user1ID);
	
	@Query(value =   "select * from user where name =:name and password=:password", nativeQuery = true)
	User getUserByQuery(String name , String password);
	
	@Query(value =   "select count(*) from user where name =:name and password=:password ", nativeQuery = true)
	Integer loginCheck(String name , String password);
	
	@Query(value =   "select count(*) from user where name =:name ", nativeQuery = true)
	Integer checkExistName(String name );
	
}
