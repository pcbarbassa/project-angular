import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsEditComponent } from './comments-edit/comments-edit.component';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';
import { CommentsListComponent } from './comments-list/comments-list.component';



@NgModule({
  declarations: [CommentsEditComponent, CommentsDetailComponent, CommentsListComponent],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
