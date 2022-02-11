import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  constructor() { }
  greet(){
    return "hello";
  }
 
}
