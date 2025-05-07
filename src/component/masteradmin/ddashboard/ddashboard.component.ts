import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpserviceService } from '../../../services/httpservice.service';



@Component({
  selector: 'app-ddashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './ddashboard.component.html',
  styleUrl: './ddashboard.component.scss'
})
export class DdashboardComponent implements OnInit{

  selectedSociety: any;
    societyList :any[]=[];
  constructor(private http:HttpserviceService){
 
  }

  ngOnInit(): void {
   this.http.getAllSociety().subscribe((val:any)=>{
    this.societyList=val;
   })
  }

  OnClick(){
    console.log("click event workingggggg");
    
  }

  openSocietyDetails(society: any) {
  this.selectedSociety = society;
  }

  closePopup() {
    this.selectedSociety = '';
  }

}
