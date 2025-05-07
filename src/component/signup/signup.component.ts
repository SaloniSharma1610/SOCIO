import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpserviceService } from '../../services/httpservice.service';
import { Router,RouterLink } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent,FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  
  showPassword: boolean = false;
  signupForm:FormGroup;
  submitteduser:string="";
  society:string="";
  socityOption: any[] = [];
  

    constructor(private http:HttpserviceService,private formBuilder: FormBuilder){  
      this.signupForm=this.formBuilder.group({
          fullName:new FormControl('',[Validators.required]),
          userEmail:new FormControl('',[Validators.required,Validators.email]),
          userContact:new FormControl('',[Validators.required,Validators.pattern(/^[6789]\d{9}$/)]),
          userAddress:new FormControl('',[Validators.required]),
          govtIdNo:new FormControl('',[Validators.required]),
          password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*]).{8,10}$/)]),
          isAgree:new FormControl(false,[Validators.required])
        });
    }


    ngOnInit(): void {
      
    } 
    
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  closePopup() {
    this.submitteduser = "";
    this.signupForm.reset();
  }

  Onsubmit(){
    if (this.signupForm.valid) {
       this.http.registerUser(this.signupForm.value).subscribe((val:any)=>{
        this.submitteduser=val.userName;
       })
    }

  } 



}
