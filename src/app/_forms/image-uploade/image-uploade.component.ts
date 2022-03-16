import { Component, Input, Self, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-uploade',
  templateUrl: './image-uploade.component.html',
  styleUrls: ['./image-uploade.component.scss']
})
export class ImageUploadeComponent implements ControlValueAccessor, OnInit {

  @Input() label!: string;
  @Input() ImageUrl!: string;

  selectedFile = {} as ImageSnippet;
  // SrcImage!: string;

  OnChage!:(ImageFile:File)=>void;

  constructor(@Self() public ngControl: NgControl, private _snackBar:SnackBarService) {
    this.ngControl.valueAccessor = this;
  }
  ngOnInit(): void {
  }

  writeValue(Image: any): void {
    this.selectedFile.file =Image;
  }

  setValue(Image: any) {
   this.selectedFile.file =Image;
  }

  registerOnChange(onchange:(ImageFile:File)=>void): void {
    this.OnChage = onchange;

  }

  registerOnTouched(fn: any): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      try {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.selectedFile.pending = true;
        this.OnChage(this.selectedFile.file);
        this.selectedFile.pending = false;
        this.onSuccess();
      } catch (error) {
        this.onError();
      }

    });

    reader.readAsDataURL(file);
  }


  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    this._snackBar.openSnackBar('Image Uploaded Succesfuly!');
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
    this._snackBar.openSnackBar('Image Upload is Failed!');
  }



}


