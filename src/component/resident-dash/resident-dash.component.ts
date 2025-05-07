import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-resident-dash',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './resident-dash.component.html',
  styleUrl: './resident-dash.component.scss'
})
export class ResidentDashComponent {

  activeSection: string = 'ddash'; // default view
    data: any[] | undefined;
    selectedFlat: string | null = null;
    showPopup: boolean = false;
    showLogoutPopup: boolean = false;
    message:string="";

    userId='';
    societyId='';
    flatGroups = {
      block1: ['A1001', 'A1002', 'A1003', 'A1004'],
      block2: ['B2001', 'B2002', 'B2003', 'B2004']
    };
    complaintsForm:FormGroup;
  
    constructor(private http: HttpserviceService, private userService: UserService,private route:Router,private formBuilder: FormBuilder) {
      this.complaintsForm=this.formBuilder.group({
        residentName:new FormControl('',[Validators.required]),
        flatNumber:new FormControl('',[Validators.required]),
        complaintText:new FormControl('',{
          validators:[Validators.required,Validators.maxLength(250)]}),
        complaintType:new FormControl('',[Validators.required]),
          });
    }
  
    ngOnInit(): void {
        
    }
  
    Onlogout() {
      this.userService.clearUser();
      this.route.navigate(['']);    
      this.showLogoutPopup = false;
    }
  
// to open cards

    openFlatDetails(flat: string) {
      this.selectedFlat = flat;
      this.showPopup = true;
    }
    closePopup() {
      this.showPopup = false;
    }
  
    // to open logout
    openLogoutPopup() {
      this.showLogoutPopup = true;
    }
    closeLogoutPopup() {
      this.showLogoutPopup = false;
    }
  
    switchSection(section: string) {
      this.activeSection = section;
    }
    Onsubmit(){
      if (this.complaintsForm.valid){
      this.http.submitComplaint(this.complaintsForm.value).subscribe((res:string)=>{
      this.message=res; 
      })
      }
    }
     
    closePopup2(){
      this.message="";
    }
  
}
