import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpserviceService } from '../../services/httpservice.service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-enrollsociety',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NavbarComponent],
  templateUrl: './enrollsociety.component.html',
  styleUrl: './enrollsociety.component.scss'
})
export class EnrollsocietyComponent implements OnInit {

  enrollForm=new FormGroup({
    societyName:new FormControl(''),
    societyAddress:new FormControl(''),
    societyRegNo:new FormControl(''),
    userName:new FormControl(''),
    contactNo:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl(''),
    govtIdNo:new FormControl(''),
    password:new FormControl('')
  });

  constructor(private http:HttpserviceService){

  }

  ngOnInit(): void {
    
  }
  Onsubmit(){    
    this.http.enrollSociety(this.enrollForm.value).subscribe((val:any)=>{
      console.log("response from API= val");
      
    });
    console.log(this.enrollForm);
    
  }
  
}
