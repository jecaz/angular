import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
import { Post } from '../../model/post.model';

@Component({
  templateUrl: './comment-list-page.component.html',
  styleUrls: ['./comment-list-page.component.css']
})
export class CommentListPageComponent implements OnInit, OnDestroy {

  private post: Post;
  private sub: any;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    let id: number;
    this.sub = this.route.params.subscribe(params => {
      id = +this.route.snapshot.params['id'];
      this.post = this.postService.getPost(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
