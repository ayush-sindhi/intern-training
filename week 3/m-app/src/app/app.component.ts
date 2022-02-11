import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm-app';
  name = 'james';
  greet(){
    return this.name;
  }
  value:number=0;
  increment(){
    this.value=this.value+1;
  }
  decrement(){
    this.value=this.value-1;
  }
  doit:boolean=false;
  dotask(){
    if(this.doit){
      this.doit=false;
    }
    else
    this.doit=true;
  }
}
