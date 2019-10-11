import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';



@NgModule({
  declarations: [PostsEditComponent, PostsListComponent, PostsDetailComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
