import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  
  userLoggedin:boolean=false;
  features:any=["Resident","Management","Security"];
  userName:string="";
  constructor(private route:Router,private userService:UserService){

  }
  ngOnInit(): void {

    this.userService.getUser().subscribe(
      (val:any)=>{
        this.userName=val.userEntity.fullName;
    });
    this.userService.getUser().subscribe((val:any)=>{
      if(val.userEntity && val.userEntity.userId){
          this.userLoggedin=true;
      }
    })
  }
  
  redirectToLoginPage(){
    console.log("page getting redirect to login");
    
    this.route.navigate(["/login"])
  }
  onlogout(){
    this.userService.clearUser();
    this.route.navigate(['']);
  }
}
