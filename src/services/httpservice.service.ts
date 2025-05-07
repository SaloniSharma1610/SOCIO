import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { text } from 'stream/consumers';


@Injectable({
  providedIn: 'root'
})

export class HttpserviceService {


  constructor(private http: HttpClient) { }

  

  enrollSociety(body:any){
    return this.http.post("http://localhost:8080/society/save", body);
  }

  getAllSociety(){
    return this.http.get("http://localhost:8080/society/getall");
  }
  
  registerUser(body:any){
    return this.http.post("http://localhost:8080/user/signup",body);
  }

  approveRole(body:any){
    return this.http.post('http://localhost:8080/admin/roleassign',body,{responseType:"text"})
  }

  submitComplaint(body:any){
    return this.http.post('http://localhost:8080/user/complaints/submit',body,{responseType: 'text'})
  }
}
