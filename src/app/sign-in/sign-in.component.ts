import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { LoginDto } from '../_models/loginDto';
import { AccountService } from '../_services/account.service';
import { SnackBarService } from '../_services/snack-bar.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  isLoading = false;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 75;

  constructor( private accountService: AccountService, private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isLoading = true;
    let loginDto: LoginDto;
    loginDto = this.loginForm.value;
    this.accountService.login(loginDto);
    if (this.accountService.getCurrentUser()) {
      this.isLoading = false;
    }
  }
}
