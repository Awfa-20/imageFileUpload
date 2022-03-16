import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fileUploadForm!: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.fileUploadForm = this.fb.group({
      'name': [''],
      'image': ['', Validators.required],
      // 'image2': ['', Validators.required],
    })
  }

  onSubmit(){

    console.log(this.fileUploadForm.value)
  }

}
