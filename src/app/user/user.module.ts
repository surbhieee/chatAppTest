import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//import { CookieModule } from 'ngx-cookie';
//import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //CookieModule.forRoot(),
    RouterModule.forChild([
      { path: 'sign-up', component: SignupComponent }
    ])
  ],
 // providers:[CookieService],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
