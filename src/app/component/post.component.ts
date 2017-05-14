import {Component, Input, OnInit} from '@angular/core';
import {Post} from './post.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  @Input()
  private post: Post;

  ngOnInit() {

}
}
