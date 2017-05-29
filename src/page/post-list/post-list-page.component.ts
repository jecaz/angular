import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {

  public pageTitle = 'Posts';
  public posts: Post[];
  public filteredPosts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.filteredPosts = this.posts;
  }

  public filterItem(item: string): Post[] {
    this.filteredPosts = this.postService.filterPost(item);

    if (this.filteredPosts.length === 0) {
      return this.filteredPosts = this.posts;
    } else {
      return this.filteredPosts;
    }
  }
}
