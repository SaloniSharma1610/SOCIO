import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,FormsModule,NavbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  selectedSociety = '';
  selectedRole = '';
  societyList: any[] = [];
  userEntity:any;
  rolesDetails:any;
  flatNo='';
  constructor(private userService:UserService,private http:HttpClient){}
  
  ngOnInit(): void {
    this.userService.getUser().subscribe((user:any)=>{
      this.userEntity=user.userEntity;
      this.rolesDetails=user.rolesDetails;
      
    });


    if(this.rolesDetails===null){
        //need to select society and role
        this.http.get('http://localhost:8080/society/getall')
          .subscribe((response: any) => {            
            this.societyList=response;
          }
          );

      }
  }
  
onEnroll() {
  console.log("Enrolled with:", this.selectedSociety, this.selectedRole);

  if(this.selectedRole==="admin" && this.flatNo!=''){
    alert("admin role can't requested for any flat no");
  }
  else{
  let reqBody={
    "societyId":this.selectedSociety,
     "userId":this.userEntity.userId,
     "status":"pending",
     "flatNo": this.flatNo,
     "requestedRole":this.selectedRole
  }
  this.http.post("http://localhost:8080/user/society/registration",reqBody).subscribe((res:any)=>{
    if(res){
      alert("registration successfully");
    }
  });
}
  
  
}

}
