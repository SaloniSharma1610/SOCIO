import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new BehaviorSubject<any>(null);


  constructor() {
    let defaultUser=
      {
      "userEntity": {
          
          "fullName": "Default User",
          
      },
      "rolesDetails": {
          
          "role": "None"
      }
  }
    this.setUser(defaultUser);
   }

  setUser(user: any): void {
    this.userSubject.next(user);
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  getCurrentUser(): any {
    return this.userSubject.getValue();
  }

  clearUser(): void {
    this.userSubject.next(null);
  }

  

}
