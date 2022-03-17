import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../_models/person';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  person!: Person;
  fileUploadForm!: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.fileUploadForm = this.fb.group({
      'name': [''],
      'image': ['', Validators.required],
      'imageUpload': ['', Validators.required],
    })
  }

  onSubmit(){
    this.person= this.fileUploadForm.value;

    console.log(this.person)
  }

}
