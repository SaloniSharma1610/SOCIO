import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

  contactForm:FormGroup;

  constructor(private formBuilder: FormBuilder){
      this.contactForm=this.formBuilder.group({
        yourName:new FormControl('',[Validators.required]),
        societyName:new FormControl('',[Validators.required]),
        contactNo:new FormControl('',[Validators.required,Validators.pattern(/^[6789]\d{9}$/)]),
        youremail:new FormControl('',[Validators.required,  Validators.email]),
        message:new FormControl('',[Validators.required,Validators.minLength(20)])
      });
  }

  Onsubmit(){
    console.log(this.contactForm);
    this.OnReset();
  }
  OnReset(){
    this.contactForm=this.formBuilder.group({
      yourName:new FormControl('',[Validators.required]),
      societyName:new FormControl('',[Validators.required]),
      contactNo:new FormControl('',[Validators.required,Validators.pattern(/^[6789]\d{9}$/)]),
      youremail:new FormControl('',[Validators.required,  Validators.email]),
      message:new FormControl('',[Validators.required])
    });
  }
}
