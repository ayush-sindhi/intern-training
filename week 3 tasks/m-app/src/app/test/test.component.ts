import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(service:ServiceProviderService) {
    this.getgreet=service.greet();
   }

  ngOnInit(): void {
  }
  getgreet:any;
  datas = [
    {id:1, name:'ayush', age:'22', address:'punjab'},
    {id:2, name:'rajat', age:'22', address:'mandi'}
  ];

}
