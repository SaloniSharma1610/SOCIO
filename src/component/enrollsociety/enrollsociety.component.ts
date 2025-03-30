import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpserviceService } from '../../services/httpservice.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-enrollsociety',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NavbarComponent,CommonModule,RouterLink],
  templateUrl: './enrollsociety.component.html',
  styleUrl: './enrollsociety.component.scss'
})
export class EnrollsocietyComponent implements OnInit {

  enrollForm:FormGroup;
  submitted:boolean=false;
  showPassword: boolean = false;

  constructor(private http:HttpserviceService,private formBuilder: FormBuilder){
    this.enrollForm=this.formBuilder.group({
      societyName:new FormControl('',[Validators.required]),
      societyAddress:new FormControl('',[Validators.required]),
      societyRegNo:new FormControl('',[Validators.required]),
      userName:new FormControl('',[Validators.required]),
      contactNo:new FormControl('',[Validators.required,Validators.pattern(/^[6789]\d{9}$/)]),
      email:new FormControl('',[Validators.required,  Validators.email]),
      address:new FormControl('',[Validators.required]),
      govtIdNo:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required, Validators.minLength(8),Validators.maxLength(10),Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*]).{8,10}$/)])
    });
  }


  ngOnInit(): void {
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  Onsubmit(){
    if (this.enrollForm.valid) {
      this.submitted = true; // Show success message
      setTimeout(() => {
        this.submitted = false; // Hide after 3 seconds
        this.enrollForm.reset(); // Reset form
      }, 3000);
    }

    this.http.enrollSociety(this.enrollForm.value).subscribe((val:any)=>{
      console.log("society enrolled",val);
      this.enrollForm.reset();
    });
  }

  closePopup() {
    this.submitted = false;
  }


  
}
