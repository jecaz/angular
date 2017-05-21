import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from "../../../../../../service/post.service";

@Component({
  /*selector: 'comment-list',*/
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  private pageTitle = 'Comments';
  private comments: Comment[];
  private comment: any;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    // error: type Comment[][] is not assignable to type Comment []. Type Comment[] is not assignable to type Comment.
    // Property 'text' is missing in type Comment[]
    /*this.comments = this.postService.getPosts().map(post => post.postComment);*/
    this.comment = this.postService.getPost(+this.route.snapshot.params['id']);
  }
}
