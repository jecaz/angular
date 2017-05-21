import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './component/post-list/post-list.component';
import {CommentListComponent} from './component/post-list/post/comment/comment-list/comment-list.component';

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: CommentListComponent}
];

export const routing = RouterModule.forRoot(routes);
