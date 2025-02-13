import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { EnrollsocietyComponent } from '../component/enrollsociety/enrollsociety.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [  
    { path: '',  component: HomepageComponent },  
    { path: 'login', component: LoginComponent }, 
    {path: 'enrollsociety', component: EnrollsocietyComponent},
    {path: 'home', component: HomepageComponent},
    {path:'dashboard', component: DashboardComponent},
    { path: '**', redirectTo: '' } // Redirect to home page for invalid routes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }