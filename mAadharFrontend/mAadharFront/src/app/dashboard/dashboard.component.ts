import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Aadhars } from './aadhars';
import { AadharsService } from './aadhars.service';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public aadhars : Aadhars[];
  formValue : FormGroup;
  aadharsObj : Aadhars = new Aadhars();
  aadharsData : any;
  fdataa: number;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private adharsService : AadharsService, private loginService:LoginService, private router: Router,) { }
  
 
  
  ngOnInit() {
  let dataa = localStorage.getItem('userid');
  if(dataa!=null)
   this.fdataa = parseInt(dataa);
   console.log(this.fdataa);
    this.getAadhars(this.fdataa);
    this.formValue = this.formBuilder.group({
      name: [''],
      gender: [''],
      dob: [''],
      address: [''],
      email: [''],
      mobile: [''],
      headuser: [this.fdataa]

    })
  }

 
  getAadhars(userid: number): void
  {
    this.adharsService.getAllAadhars(userid).subscribe(
      (res: Aadhars[]) =>{
        this.aadhars = res;
      },
      (error : HttpErrorResponse)=>{
        alert("Please Login First");
        this.router.navigate(['login']);
       
      }
    );
  }

  addAadhar(): void
  {
    console.log(this.aadharsObj);
    this.aadharsObj.name = this.formValue.value.name;
    this.aadharsObj.gender = this.formValue.value.gender;
    this.aadharsObj.dob = this.formValue.value.dob;
    this.aadharsObj.address = this.formValue.value.address;
    this.aadharsObj.email = this.formValue.value.email;
    this.aadharsObj.mobile = this.formValue.value.mobile;
    this.aadharsObj.headuser = this.fdataa;
    this.adharsService.addAadhars(this.aadharsObj)
    .subscribe(res=>{
      console.log(res);
      let ref = document.getElementById("close");
      ref?.click();
      this.formValue.reset();
      alert("Request Sent, Aadhar will visible once its verfied")
      this.getAadhars(this.fdataa);
      
    }, err=>{
      console.log(err);
    });
    this.getAadhars(this.fdataa);

  }

  deleteAadhar(aadhars : any){
    this.adharsService.deleteAadhars(aadhars.id)
    .subscribe(res=>{
      alert("Aadhar Deleted");
      this.getAadhars(this.fdataa);
    })
  }

  onEdit(temp: any)
  {
    this.formValue.controls['name'].setValue(temp.name);
    this.formValue.controls['gender'].setValue(temp.gender);
    this.formValue.controls['dob'].setValue(temp.dob);
    this.formValue.controls['address'].setValue(temp.address);
    this.formValue.controls['email'].setValue(temp.email);
    this.formValue.controls['mobile'].setValue(temp.mobile);
    this.uid = temp.id;
    
  }
  public uid: number;

  updateEmployee()
  {
    this.aadharsObj.id = this.uid;
    this.aadharsObj.name = this.formValue.value.name;
    this.aadharsObj.gender = this.formValue.value.gender;
    this.aadharsObj.dob = this.formValue.value.dob;
    this.aadharsObj.address = this.formValue.value.address;
    this.aadharsObj.email = this.formValue.value.email;
    this.aadharsObj.mobile = this.formValue.value.mobile;
    this.aadharsObj.headuser = this.fdataa;
    this.aadharsObj.action = "inactive";

    this.adharsService.updateAadhars(this.aadharsObj)
    .subscribe(res=>{
      console.log(this.aadharsObj);
      alert("Update Reqested, Aadhar will visible once its verfied ")

      let ref = document.getElementById('uclose')
      ref?.click();
      this.formValue.reset();
      this.getAadhars(this.fdataa);

    })
  }

  applyDuplicate()
  {
    alert("Requested Duplicate Aadhar, Wait for varified")
  }

  logoutSession()
  {
    localStorage.setItem('userid',JSON.stringify(null));
    this.router.navigate(['login']);


  }



  
    

}
