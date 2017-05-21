import {Component, OnInit} from '@angular/core';
import {Post} from '../../../model/post.model';
import {PostService} from '../../../service/post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{

  private pageTitle = 'Posts';

  private posts: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {

    this.posts = this.postService.getPosts();
/*    this.posts = [
      new Post(
        {
          id: 1,
          title: 'Cable lobby conducts survey, finds that Americans want net neutrality',
          numberOfComments: 5,
          imageOfPost: 'https://i.redditmedia.com/-fyiHEkg8hFgbvdadNgqSH7-7tFe2nLRnqfmAP1pOfg.jpg?s=5fc2768568c6d5424846ab0ee2a29d72',
          comment: [
            {
              id: 1,
              author: 'Smokey Bare',
              comment: 'This fills me with joy!',
              numberOfPoints: 40
            },
            {
              id: 2,
              author: 'Smokey',
              comment: 'This fills me with joy!',
              numberOfPoints: 40
            }
          ]
        }),
      new Post(
        {
          id: 2,
          title: '20 million people are starving and the media only cares about Trump says UN',
          numberOfComments: 9,
          imageOfPost: 'https://i.redditmedia.com/TT9QsZaVvNekOYTUQ-E7e2FfU2TXAdJ3BxskfVug5b8.jpg?s=7ddef56f72d65d052a45092c4c9bad56',
          comment: [
            {
              id: 1,
              author: 'mr jobby',
              comment: 'Ooh - that\'s bad.',
              numberOfPoints: 40
            },
            {
              id: 2,
              author: 'joobi',
              comment: 'Ooh - that\'s really bad.',
              numberOfPoints: 50
            },
            {
              id: 3,
              author: 'DeepMusing',
              comment: 'Dark humor is like food, not everyone gets it.',
              numberOfPoints: 50
            }
          ]
        }),
      new Post(
        {
          id: 3,
          title: 'How ladybugs unfold their wings',
          numberOfComments: 1,
          imageOfPost: 'https://i.redditmedia.com/oNyDBofGKdluZYKO27rR5hq57YZ3L1qdTmQi4V9OVTk.png?s=e523e3f4fab63c6108f712cb0513de6f',
          comment: [
            {
              id: 1,
              author: 'TheCloned',
              comment: 'Like a helicopter that retracts it\'s rotors when it lands, then covers itself in armor to become a fuckin tank.',
              numberOfPoints: 66
            },
            {
              id: 2,
              author: 'KingGorilla',
              comment: 'I don\'t think we can learn that from ladybugs...',
              numberOfPoints: 550
            },
            {
              id: 3,
              author: 'switchblade420',
              comment: 'So it\'s a physics thing? I thought there were muscles pulling it back in!',
              numberOfPoints: 557
            }
          ]
      })
];*/

    console.log(this.posts);
    /*const post1 = {id: 1, name: 'Best song ever', comment: 'Great song!'};
     const post2 = {id: 2, name: 'Practice yoga', comment: 'Cool activity!'};
     const post3 = {id: 3, name: 'Do dream job', comment: 'Yes, that\'s awesome!'};

     this.posts.push(new Post(post1));
     this.posts.push(new Post(post2));
     this.posts.push(new Post(post3));*/
  }
}
