import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data:any;
  constructor(service:DataProviderService) {
    service.getData().subscribe((data1)=>{
      this.data=data1;
    });
    service.getComments();
   }
 
  
  ngOnInit(): void {
  }

}