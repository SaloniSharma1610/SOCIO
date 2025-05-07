import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DdashboardComponent } from './ddashboard/ddashboard.component';
import { SocietyComponent } from './society/society.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-masteradmin',
  standalone: true,
  imports: [DdashboardComponent,SocietyComponent,CommonModule,NavbarComponent,RouterLink],
  templateUrl: './masteradmin.component.html',
  styleUrl: './masteradmin.component.scss'
})
export class MasteradminComponent {
activeSection: string = 'ddashboard'; // default view
  showLogoutPopup: boolean = false;
  
  tableData:any[]=[];

  
  constructor(private http:HttpClient,private userService:UserService,private route:Router){
    console.log("costructor from master admin");
    
  }

  ngOnInit(): void {
    
  }
  
  
    openLogoutPopup() {
      this.showLogoutPopup = true;
    }
    closeLogoutPopup() {
      this.showLogoutPopup = false;
    }
    Onlogout() {  
        this.userService.clearUser();
        this.route.navigate(['']); 
      this.showLogoutPopup = false;
    }
    switchSection(section: string){
      this.activeSection = section;
    }

    
}
