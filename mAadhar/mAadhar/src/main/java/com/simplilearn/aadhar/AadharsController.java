package com.simplilearn.aadhar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.aadhar.model.Aadhars;
import com.simplilearn.aadhar.service.AadharsService;

@RestController
@RequestMapping("/aadhars")
public class AadharsController {
	
	@Autowired
	AadharsService aadharsService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Aadhars>> getAll()
	{
		List<Aadhars> aadhars = aadharsService.getAllAadhars();
		return new ResponseEntity<>(aadhars, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Aadhars> addAadhar(@RequestBody Aadhars aadhars)
	{
		Aadhars newAadhar = aadharsService.addAadhars(aadhars);
		return new ResponseEntity<>(newAadhar, HttpStatus.CREATED);
	}
	
	
	
	
	@GetMapping("/huser/{userid}")
	public ResponseEntity<List<Aadhars>> getAadharByUser(@PathVariable int userid)
	{
		List<Aadhars> aadhars = aadharsService.getAadharByHUser(userid);
		  
		  if(aadhars!=null)
			  return new ResponseEntity<>(aadhars, HttpStatus.OK);
		  else
			  return new  ResponseEntity<>(aadhars,HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Aadhars> updateAadhars(@RequestBody Aadhars aadhars)
	{
		Aadhars updateAadhars = aadharsService.updateAadhars(aadhars);
		return new ResponseEntity<>(updateAadhars, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Aadhars> deleteAadhars(@PathVariable Long id)
	{
		aadharsService.deleteAadhars(id);
		return new ResponseEntity<Aadhars>(HttpStatus.OK);
	}
	
	
	

}
