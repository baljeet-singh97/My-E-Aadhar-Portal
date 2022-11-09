package com.simplilearn.aadhar.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Aadhars {
	


	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	private String name;
	private String gender;
	private String dob;
	private String address;
	private String email;
	private String mobile;
	private String imgurl = "https://www.bootdey.com/img/Content/avatar/avatar7.png";
	private int headuser;
	
	
	@Column(nullable = false, updatable = false)
    private String aadharnumber;
	
	private String action = "inactive";

	public Aadhars(long id, String name, String gender, String dob, String address, String email, String mobile,
			String imgurl, int headuser, String aadharnumber, String action) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.email = email;
		this.mobile = mobile;
		this.imgurl = imgurl;
		this.headuser = headuser;
		this.aadharnumber = aadharnumber;
		this.action = action;
	}

	public Aadhars() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getImgurl() {
		return imgurl;
	}

	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}

	public int getHeaduser() {
		return headuser;
	}

	public void setHeaduser(int headuser) {
		this.headuser = headuser;
	}

	public String getAadharnumber() {
		return aadharnumber;
	}

	public void setAadharnumber(String aadharnumber) {
		this.aadharnumber = aadharnumber;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	@Override
	public String toString() {
		return "Aadhars [id=" + id + ", name=" + name + ", gender=" + gender + ", dob=" + dob + ", address=" + address
				+ ", email=" + email + ", mobile=" + mobile + ", imgurl=" + imgurl + ", headuser=" + headuser
				+ ", aadharnumber=" + aadharnumber + ", action=" + action + "]";
	}

	
	
	

}
