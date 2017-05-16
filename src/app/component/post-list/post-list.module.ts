import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {PostListComponent} from "./post-list.component";
import {PostModule} from "./post/post.module";

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PostModule
  ],
  providers: [],
  exports: [PostListComponent]
})
export class PostListModule { }
