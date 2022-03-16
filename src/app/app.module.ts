import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SignInComponent } from './sign-in/sign-in.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { CachingInterceptor } from './_interceptors/caching.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    TestComponent,
    FileUploadComponent,
    ImageUploadeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
