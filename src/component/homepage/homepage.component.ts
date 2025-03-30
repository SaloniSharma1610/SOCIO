import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,AboutusComponent, FeaturesComponent,ContactusComponent,NavbarComponent,RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  features:any=["Resident","Management","Security"];

 
}
