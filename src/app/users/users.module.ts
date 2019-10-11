import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';



@NgModule({
  declarations: [UsersEditComponent, UsersListComponent, UsersDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
