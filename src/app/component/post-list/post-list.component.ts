import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  private pageTitle = 'Posts';

  private posts: Post[];

  ngOnInit() {
    this.posts = [
      new Post(
        {
          id: 1,
          title: 'Cable lobby conducts survey, finds that Americans want net neutrality',
          numberOfComments: 5,
          imageOfPost: 'https://i.redditmedia.com/-fyiHEkg8hFgbvdadNgqSH7-7tFe2nLRnqfmAP1pOfg.jpg?s=5fc2768568c6d5424846ab0ee2a29d72'
        }),
      new Post(
        {
          id: 2,
          title: 'If Dems win the House, first order of business: Investigate President Trump',
          numberOfComments: 9,
          imageOfPost: 'https://i.redditmedia.com/TT9QsZaVvNekOYTUQ-E7e2FfU2TXAdJ3BxskfVug5b8.jpg?s=7ddef56f72d65d052a45092c4c9bad56'
        }),
      new Post(
        {
          id: 3,
          title: 'meirl',
          numberOfComments: 1,
          imageOfPost: 'https://i.redditmedia.com/oNyDBofGKdluZYKO27rR5hq57YZ3L1qdTmQi4V9OVTk.png?s=e523e3f4fab63c6108f712cb0513de6f'
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
