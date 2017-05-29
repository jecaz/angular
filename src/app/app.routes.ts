import { Routes, RouterModule } from '@angular/router';
import { PostListPageComponent } from '../page/post-list/post-list-page.component';
import { CommentListPageComponent } from '../page/comment-list/comment-list-page.component';

export const routes: Routes = [
  { path: '', component: PostListPageComponent },
  { path: 'post/:id', component: CommentListPageComponent}
];

export const routing = RouterModule.forRoot(routes);
