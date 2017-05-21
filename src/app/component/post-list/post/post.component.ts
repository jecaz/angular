import {Component, Input} from '@angular/core';
import {Post} from '../../../../model/post.model';
import {Router} from "@angular/router";

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  private post: Post;

  @Input()
  private indexNumberOfPost: any;

  @Input()
  public image: string;

  constructor (private router: Router) {}

 /* onClick (id: number) {
    this.router.navigate(['comment-list', id]);
  }*/

}
