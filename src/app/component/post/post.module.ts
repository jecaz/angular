import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostComponent } from './post.component';
import { CommentModule } from '../comment/comment.module';
import { routing } from '../../app.routes';
import { CommentListPageModule } from '../../../page/comment-list/comment-list-page.module';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommentModule,
    CommentListPageModule,
    routing
  ],
  providers: [],
  exports: [PostComponent]
})
export class PostModule { }
