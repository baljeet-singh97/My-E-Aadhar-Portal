package com.simplilearn.aadhar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.aadhar.model.Users;
import com.simplilearn.aadhar.repository.UsersRepo;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepo userRepo;
	
	public Users addUser(Users users)
	{
		return userRepo.save(users);
	}
	
	public List<Users> getAllUsers()
	{
		return userRepo.findAll();
	}

}
