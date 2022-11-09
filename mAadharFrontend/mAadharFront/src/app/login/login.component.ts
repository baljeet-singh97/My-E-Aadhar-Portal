import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm: FormGroup;
  public currUserId: number;

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, public loginS: LoginService) { }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      mobile:[''],
      password:['']
    })
    
    
  }
saveData()
{
  let data = {}
}

  login()
  {
    this.http.get<any>("http://localhost:8080/users/all")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        if (a.mobile == this.loginForm.value.mobile && a.password == this.loginForm.value.password )
        {
          
          
          this.currUserId = a.id;
          localStorage.setItem('userid',JSON.stringify(this.currUserId));
        }
        return a.mobile == this.loginForm.value.mobile && a.password == this.loginForm.value.password ;
        
      });

      if(user)
      {
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      }
      else{
        alert("user not found");
      }
    }, err=>{
      alert("something went wrong!!");
    })
  }

}
