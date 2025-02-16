import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,AboutusComponent, FeaturesComponent,ContactusComponent,NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  features:any=["Resident","Management","Security"];

 
}
