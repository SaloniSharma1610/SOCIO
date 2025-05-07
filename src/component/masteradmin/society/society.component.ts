import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { HttpserviceService } from '../../../services/httpservice.service';
import { log } from 'console';

@Component({
  selector: 'app-society',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './society.component.html',
  styleUrl: './society.component.scss'
})
export class SocietyComponent implements OnInit{

  data:any[] | undefined;
  userId='';
  societyId='';
  approvedMessage='';

  constructor(private http:HttpClient,private https:HttpserviceService,private userService:UserService){
    console.log("constructor called");
    
    }

  ngOnInit() {    
    this.getAllpendingRequest();
  }

  getAllpendingRequest(){
    this.http.get('http://localhost:8080/admin/adminrequest')
      .subscribe((response: any) => {
        this.data = response;
      }
      );
  }

  onApprove(user:any){
    let body={
      "userId":user.userId,
     "societyId":user.societyId,
     "role":"societyAdmin"

    };
    
    this.https.approveRole(body).subscribe((res:string)=>{
      this.approvedMessage=res;
      console.log(res);
      
    })
  }
  onReject(){

  }

}
