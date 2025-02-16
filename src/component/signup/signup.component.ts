import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpserviceService } from '../../services/httpservice.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent,FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  
  society:string="";
  socityOption: any[] = [];

  signupForm=new FormGroup({
    userName:new FormControl(''),
    societyId:new FormControl(this.society),
      userEmail:new FormControl(''),
      userContact:new FormControl(''),
      userAddress:new FormControl(''),
      govtIdNo:new FormControl(''),
      password:new FormControl('')
    });

    constructor(private http:HttpserviceService){     
      this.fetchAllSocietyOptions();
    }


    ngOnInit(): void {
      
    } 


    fetchAllSocietyOptions(){
      this.http.getAllSocietyIds().subscribe((val:any)=>{
        val.forEach((element:any) => {
          let temp={name:element}
          this.socityOption.push(temp);
          
        });
      });
    }

    Onsubmit(){
      console.log(this.signupForm);
      console.log(this.society);
      
    } 
}
