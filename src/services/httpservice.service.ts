import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnrollBody} from './type';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }

  getAllSocietyIds(){
    return this.http.get("http://localhost:8080/society/getAllIds");
  }
  

  enrollSociety(body:any){
    return this.http.post("http://localhost:8080/society/save", body);
  }
}
