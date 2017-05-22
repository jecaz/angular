import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../../../../../../service/post.service';
import {Post} from '../../../../../../model/post.model';

@Component({
  /*selector: 'comment-list',*/
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  private post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id: number = +this.route.snapshot.params['id'];
    this.post = this.postService.getPost(id);
  }
}
