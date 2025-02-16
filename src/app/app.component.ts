import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { FooterComponent } from '../component/footer/footer.component';
import { HttpserviceService } from '../services/httpservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,NavbarComponent, HomepageComponent,FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  
  title = 'SocietyUI';
  isShown:boolean=false;
  homeButton = false;
  dashboardButton = false;
  ordersButton = false;
  productButton = false;
  customersButton = false;
  showSidebar = false;

  constructor(http: HttpserviceService) {
    console.log("in constructor");   
    // http.getInfo().subscribe((val)=>{
    //   console.log("got data",  val);
    // });
      
    
  }
  ngOnInit(): void {
    console.log("inside on init");
    
  }
  changeShow(){
    this.showSidebar =!this.showSidebar;
  }

  linkClick(i:any){
    switch(i){
      case 'home':
        this.homeButton = true;
        this.dashboardButton = false;
        this.ordersButton = false;
        this.productButton = false;
        this.customersButton = false;
        break;
      case 'dashboard':
        this.homeButton = false;
        this.dashboardButton = true;
        this.ordersButton = false;
        this.productButton = false;
        this.customersButton = false;
        break;
      case 'orders':
        this.homeButton = false;
        this.dashboardButton = false;
        this.ordersButton = true;
        this.productButton = false;
        this.customersButton = false;
        break;
      case 'product':
        this.homeButton = false;
        this.dashboardButton = false;
        this.ordersButton = false;
        this.productButton = true;
        this.customersButton = false;
        break;
      case 'customers':
        this.homeButton = false;
        this.dashboardButton = false;
        this.ordersButton = false;
        this.productButton = false;
        this.customersButton = true;
        break; 
    }
    
  }
}
