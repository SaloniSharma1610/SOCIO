import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';
import { error, log } from 'console';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,RouterLink,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  ownerLoginForm:FormGroup;
  message: string = '';

  constructor(private http:HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService:UserService,){


    this.ownerLoginForm=formBuilder.group({
      ownername:new FormControl(''),
      password:new FormControl(''),
     });
  }

  onLogin(){
      const body = {
        userName: this.ownerLoginForm.value.ownername,
        userPassword: this.ownerLoginForm.value.password
      };
      this.http.post('http://localhost:8080/user/login',body)
          .subscribe((response: any) => {
            this.userService.setUser(response);
            if(response.rolesDetails===null ||response.rolesDetails.role==='resident'||response.rolesDetails.role==="" ){
              this.router.navigate(['/user']);  
            }
            if(response.rolesDetails && response.rolesDetails.role==="societyAdmin"){
              this.router.navigate(['/societyadmin']);
            }
            if(response.rolesDetails && response.rolesDetails.role==="masterAdmin"){
              this.router.navigate(['/masterAdmin']);  
            }


          }
          );

  }

}
