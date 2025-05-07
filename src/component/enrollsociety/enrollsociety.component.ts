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
  showPassword: boolean = false;
  message:string='';

  constructor(private http:HttpserviceService,private formBuilder: FormBuilder){
    this.enrollForm=this.formBuilder.group({
      societyName:new FormControl('',[Validators.required]),
      societyAddress:new FormControl('',[Validators.required]),
      societyRegNo:new FormControl('',[Validators.required]),
      noOfFlats:new FormControl('',[Validators.required]),
      govtIdNo:new FormControl('',[Validators.required]),
    });
  }


  ngOnInit(): void {
    
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  Onsubmit(){
    if (this.enrollForm.valid) {
      this.http.enrollSociety(this.enrollForm.value).subscribe(
        (val:any)=>{
            this.message="Your society request has been registered with ID "+val.societyId+" successfully!"
        },
        ((error:any)=>{
          this.message=error;
        }) 
      );
    } 
  }

  closePopup() {
    this.message="";
    this.enrollForm.reset();
  }


  
}
