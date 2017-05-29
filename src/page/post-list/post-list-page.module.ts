import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PostListPageComponent } from './post-list-page.component';
import { PostModule } from '../../app/component/post/post.module';

@NgModule({
  declarations: [
    PostListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PostModule
  ],
  providers: [],
  exports: [PostListPageComponent]
})
export class PostListPageModule { }
