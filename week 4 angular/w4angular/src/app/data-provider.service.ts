import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http:HttpClient) { }

  getComments()
  {
    //return this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>console.log(data));
    // console.log(this.http.post())
  }
  getData()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
