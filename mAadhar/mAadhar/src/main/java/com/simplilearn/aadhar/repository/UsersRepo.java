package com.simplilearn.aadhar.repository;

import org.springframework.data.jpa.repository.JpaRepository; 

import com.simplilearn.aadhar.model.Users;

public interface UsersRepo extends JpaRepository<Users, Long> {

}
