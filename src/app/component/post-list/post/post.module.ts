import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PostComponent} from './post.component';
import {CommentModule} from './comment/comment.module';
import {routing} from "../../../app.routes";
import {CommentListModule} from "./comment/comment-list/comment-list.module";

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommentModule,
    CommentListModule,
    routing
  ],
  providers: [],
  exports: [PostComponent]
})
export class PostModule { }
