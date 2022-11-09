package com.simplilearn.aadhar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.aadhar.model.Aadhars;

public interface AadharsRepo extends JpaRepository<Aadhars, Long> {
	
	public List<Aadhars> findByHeaduserAndAction(Integer userid, String status);
	
}
