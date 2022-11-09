package com.simplilearn.aadhar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.aadhar.model.Users;
import com.simplilearn.aadhar.service.UsersService;

@RestController
@RequestMapping("/users")
public class UsersContoller {
	
	@Autowired
	UsersService usersService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Users>> getAll()
	{
		List<Users> users = usersService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Users> addEmployee(@RequestBody Users users)
	{
		Users newUsers = usersService.addUser(users);
		return new ResponseEntity<>(newUsers, HttpStatus.CREATED);
	}
	
}
