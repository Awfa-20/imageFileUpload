import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!:FormGroup;
  hide = true;


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){

  console.log(this.loginForm.value);
  this.router.navigateByUrl('/home');
  }


}
