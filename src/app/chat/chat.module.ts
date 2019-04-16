import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
//import { CookieModule } from 'ngx-cookie';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //CookieModule.forRoot(),
    RouterModule.forChild([
      { path: 'chat', component: ChatBoxComponent }
    ]),
    SharedModule
  ],
  //providers:[CookieService ],
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe]
})
export class ChatModule { }
