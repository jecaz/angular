import { Component, Input } from '@angular/core';
import { Post } from '../../../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  private post: Post;

  @Input()
  public indexNumberOfPost: number;
}
