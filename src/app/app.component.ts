import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { FooterComponent } from '../component/footer/footer.component';
import { HttpserviceService } from '../services/httpservice.service';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,NavbarComponent, HomepageComponent,FooterComponent,RouterLink,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit{
  
  title = 'SocietyUI';

 
  showSidebar = false;

  constructor(http: HttpserviceService) {
   
    
  }
  ngOnInit(): void {
    
  }
  changeShow(){
    this.showSidebar =!this.showSidebar;
  }

}
