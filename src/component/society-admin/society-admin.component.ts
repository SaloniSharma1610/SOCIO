import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-society-admin',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './society-admin.component.html',
  styleUrl: './society-admin.component.scss'
})
export class SocietyAdminComponent {


  data: any[] | undefined;
  selectedFlat: string | null = null;
  showPopup: boolean = false;
  activeSection: string = 'ddash'; // default view
  showLogoutPopup: boolean = false;
  userName: string = "";
  userId='';
  societyId='';
  flatGroups = {
    block1: ['A1001', 'A1002', 'A1003', 'A1004'],
    block2: ['B2001', 'B2002', 'B2003', 'B2004']
  };

  constructor(private http: HttpClient, private userService: UserService,private route:Router) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (val: any) => {
        this.userName = val.userEntity.fullName;
        this.userId=val.rolesDetails.userId;
         this.societyId=val.rolesDetails.societyId;
      });    
      console.log("ng on init called");     
  }

  getPendingRequest(){
    if(this.userId && this.societyId){
      this.http.get("http://localhost:8080/admin/request/"+this.userId+"/society/"+this.societyId).subscribe(
        (val:any)=>{        
        this.data=val;
      });
    }
    else{
      console.log("user not logged in");
      
    }
    
  }  

  Onlogout() {
    this.userService.clearUser();
    this.route.navigate(['']);    
    this.showLogoutPopup = false;
  }

  openFlatDetails(flat: string) {
    this.selectedFlat = flat;
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }

  openLogoutPopup() {
    this.showLogoutPopup = true;
  }
  closeLogoutPopup() {
    this.showLogoutPopup = false;
  }

  switchSection(section: string) {
    this.activeSection = section;
  }

 

}
