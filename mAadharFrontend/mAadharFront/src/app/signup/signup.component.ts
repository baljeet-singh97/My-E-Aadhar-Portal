import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder} from "@angular/forms";
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
   this.signupForm =  this.formBuilder.group({
      mobile:[''],
      password:['']
    })
  }

  signup(){
    this.http.post<any>("http://localhost:8080/users/add", this.signupForm.value)
    .subscribe(res=>{
      alert("signup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("something went wrong")
    })
  }

}
