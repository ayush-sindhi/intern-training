import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task:any[]=[];
  count=0;
  task1:string=''
  constructor() { 

  }
  addTask(){

    this.task.splice(0, 0, {task:this.task1,id:this.count});
    this.count++;
    console.log(this.task)
  }
  deleteTask(num:number)
  { 
    this.task.forEach((item,index)=>{
      if(item.id==num)
      {
        this.task.splice(index,1);
      }
    })
  }
  ngOnInit(): void {
  }

}
