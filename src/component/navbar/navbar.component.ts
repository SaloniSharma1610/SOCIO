import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  

  features:any=["Resident","Management","Security"];

  constructor(private route:Router){

  }
  ngOnInit(): void {
    
  }
  redirectToLoginPage(){
    console.log("page getting redirect to login");
    
    this.route.navigate(["/login"])
  }
}
