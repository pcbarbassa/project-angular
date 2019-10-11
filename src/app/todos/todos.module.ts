import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';



@NgModule({
  declarations: [TodosDetailComponent, TodosListComponent, TodosEditComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
