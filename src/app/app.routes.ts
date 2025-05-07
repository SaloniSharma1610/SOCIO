import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { EnrollsocietyComponent } from '../component/enrollsociety/enrollsociety.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '../component/signup/signup.component';
import { UserComponent } from '../component/user/user.component';
import { SocietyAdminComponent } from '../component/society-admin/society-admin.component';
import { MasteradminComponent } from '../component/masteradmin/masteradmin.component';
import { ResidentDashComponent } from '../component/resident-dash/resident-dash.component';


export const routes: Routes = [  
    { path: '',  component: HomepageComponent },  
    { path: 'login', component: LoginComponent }, 
    {path: 'enrollsociety', component: EnrollsocietyComponent},    
    {path:'masterAdmin', component: MasteradminComponent},
    {path:'signup', component: SignupComponent},
    {path:'societyadmin', component: SocietyAdminComponent},
    {path:'user', component: UserComponent},
    {path:'resident', component: ResidentDashComponent},
    { path: '**', redirectTo: '' } // Redirect to home page for invalid routes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }