import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommentListPageComponent } from './comment-list-page.component';
import { CommentModule } from '../../app/component/comment/comment.module';


@NgModule({
  declarations: [
    CommentListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommentModule
  ],
  providers: [],
  exports: [CommentListPageComponent]
})
export class CommentListPageModule { }
