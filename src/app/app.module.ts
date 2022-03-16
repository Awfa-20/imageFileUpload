import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_material/material.module';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageUploadeComponent } from './_forms/image-uploade/image-uploade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    TestComponent,
    FileUploadComponent,
    ImageUploadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
