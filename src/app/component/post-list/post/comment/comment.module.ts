import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommentComponent} from './comment.component';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  exports: [CommentComponent]
})
export class CommentModule { }
