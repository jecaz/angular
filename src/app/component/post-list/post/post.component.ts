import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../model/post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input()
  private post: Post;

  @Input()
  private indexNumberOfPost: any;

  @Input()
  public image: string;

  ngOnInit() {

}
}
