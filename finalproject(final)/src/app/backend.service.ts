import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
private registerurl: "http://localhost:3000/register"
private editurl: "http://localhost:3000/edit"
private customerurl: "http://localhost:3000/customer"

  constructor(private http:HttpClient) { }
   
   registerUser(data){
    return this.http.post<any>(this.registerurl,data);
  }
  editUser(data){
    return this.http.put<any>(this.editurl,data);
  }
  customerUser(data){
    return this.http.get<any>(this.customerurl,data);
  }
  
}
