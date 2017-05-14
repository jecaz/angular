import {Component, OnInit} from '@angular/core';
import {Post} from './component/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Posts:';

  private posts: Post[];

  ngOnInit() {
    this.posts = [
      new Post(
        {
          id: 1,
          name: 'Best song ever',
          numberOfComments: 5
        }),
      new Post(
        {
          id: 2,
          name: 'Practice yoga',
          numberOfComments: 9
        }),
      new Post(
        {
          id: 3,
          name: 'Do dream job',
          numberOfComments: 1
        })
    ];

    console.log(this.posts);
    /*const post1 = {id: 1, name: 'Best song ever', comment: 'Great song!'};
    const post2 = {id: 2, name: 'Practice yoga', comment: 'Cool activity!'};
    const post3 = {id: 3, name: 'Do dream job', comment: 'Yes, that\'s awesome!'};

    this.posts.push(new Post(post1));
    this.posts.push(new Post(post2));
    this.posts.push(new Post(post3));*/
  }
}
