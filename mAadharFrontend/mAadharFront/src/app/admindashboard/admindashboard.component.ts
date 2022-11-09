import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Aadhars } from '../dashboard/aadhars';
import {AadharsService} from '../dashboard/aadhars.service'




@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  formValue : FormGroup;
  
  public aadhars : Aadhars[];
  aadharsObj : Aadhars = new Aadhars();
 
  

  constructor(private formBuilder: FormBuilder, private adharsService: AadharsService, private router: Router) { }

  ngOnInit(): void {
    
    this.getAadhars();
    this.formValue = this.formBuilder.group({
      id : [''],
      name : [''],
      email : [''],
      mobile : [''],
      address : [''],
      gender : [''],
      dob : [''],
      action:['']
    });

  }
  getAadhars(): void
  {
    this.adharsService.getinactive()
    .subscribe((res:Aadhars[])=>{
      this.aadhars = res;
    })
  }

  onEdit(temp: Aadhars)
  {
    this.formValue.controls['name'].setValue(temp.name);
    this.formValue.controls['email'].setValue(temp.email);
    this.formValue.controls['mobile'].setValue(temp.mobile);
    this.formValue.controls['address'].setValue(temp.address);
    this.formValue.controls['gender'].setValue(temp.gender);
    this.formValue.controls['dob'].setValue(temp.dob);
    this.formValue.controls['action'].setValue(temp.action);
    this.uid = temp.id;
    this.hedUser = temp.headuser;
    
  }
  public hedUser:number;
  public uid: number;

  updateAStatus(): void
  {
    this.aadharsObj.id = this.uid;
    this.aadharsObj.name = this.formValue.value.name;
    this.aadharsObj.gender = this.formValue.value.gender;
    this.aadharsObj.dob = this.formValue.value.dob;
    this.aadharsObj.address = this.formValue.value.address;
    this.aadharsObj.email = this.formValue.value.email;
    this.aadharsObj.mobile = this.formValue.value.mobile;
    this.aadharsObj.action = this.formValue.value.action;
    this.aadharsObj.headuser = this.hedUser;

    this.adharsService.updateAadhars(this.aadharsObj)
    .subscribe(res=>{
      
      alert("Verified, Accepted")
      let ref = document.getElementById('uclose')
      ref?.click();
      this.formValue.reset();

    })
  }


 



}
