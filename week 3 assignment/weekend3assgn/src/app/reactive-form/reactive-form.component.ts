import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  logIn!: FormGroup;
  ngOnInit(): void {
    this.logIn = new FormGroup({
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
    });
  }

  flag: any;

  onSubmit() {
    this.fnameStatus = this.logIn.get('fname')!.valid;
    this.lnameStatus = this.logIn.get('lname')!.valid;
    this.emailStatus = this.logIn.get('email')!.valid;
    this.pwdStatus = this.logIn.get('pwd')!.valid;

    if (
      this.fnameStatus &&
      this.lnameStatus &&
      this.emailStatus &&
      this.pwdStatus
    )
      alert('your entry is correct and thus recorded');
    else alert('Youe entry is not correct,please check the error messages');
    console.log(
      this.fnameStatus,
      this.lnameStatus,
      this.emailStatus,
      this.pwdStatus
    );
    this.flag = true;
    console.log('hellp');
    console.log(this.logIn);
  }

  fnameStatus: boolean = false;
  lnameStatus: boolean = false;
  emailStatus: boolean = false;
  pwdStatus: boolean = false;
}