import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommentListComponent} from './comment-list.component';
import {CommentModule} from '../comment.module';


@NgModule({
  declarations: [
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommentModule
  ],
  providers: [],
  exports: [CommentListComponent]
})
export class CommentListModule { }
