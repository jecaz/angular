import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {PostListModule} from './component/post-list/post-list.module';
import {routing} from './app.routes';
import {PostService} from "../service/post.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PostListModule,
    routing
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
