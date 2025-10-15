// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {
//   private apiUrl = 'https://example.com/api/contact'; 
//   constructor(private http: HttpClient) { }

//   sendcontactForm(Data: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, Data);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://api.exemple.com/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}



