import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  registerForm!: FormGroup;
  uemail: string = '';
  upassword: string = '';
  submitted: boolean = false;

  constructor(private builder: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.builder.group({
      uemail: [''],
      upassword: [''],
    });
  }

  onSubmit(){
    this.submitted = true;

    this.uemail = this.registerForm.get('uemail')?.value;
    this.upassword = this.registerForm.get('upassword')?.value;
    if (this.uemail == 'admin@mail.com' && this.upassword == '1234') {
     // alert("Form Submitted Successfully"+this.upassword);
      this.router.navigate(['/admindashboard']);
    } else {
      alert('wrong credential');
    }

  }

}
