import { CommonModule, NgSwitch } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DdashboardComponent } from '../masteradmin/ddashboard/ddashboard.component';
import { SocietyComponent } from '../masteradmin/society/society.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,DdashboardComponent,SocietyComponent,NgSwitch],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  activeSection: string = 'ddashboard'; // default view
  showLogoutPopup: boolean = false;
  userName:string="";
  tableData:any[]=[];

  
  constructor(private http:HttpClient,private userService:UserService){
    console.log("costructor from master admin");
    
  }

  ngOnInit(): void {
    console.log("ng on init from master admin");
    this.userService.getUser().subscribe(
      (val:any)=>{
        this.userName=val.userEntity.fullName;
    });
  }
  
  
    openLogoutPopup() {
      this.showLogoutPopup = true;
    }
    closeLogoutPopup() {
      this.showLogoutPopup = false;
    }
    logout() {
      console.log('Logging out...');
      this.showLogoutPopup = false;
    }
    switchSection(section: string){
      this.activeSection = section;
    }

    getAllRoleRequest(){
      
    }

}
