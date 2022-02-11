import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!:FormGroup; //or logIn:FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    this.logIn=new FormGroup({
      'fName':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'lName':new FormControl(null),
      'age':new FormControl(null),
      'address':new FormGroup({
        'street':new FormControl(null),
        'state':new FormControl(null)
      })
    });
  }
  onSubmit(){
    console.log(this.logIn);
  }

}
