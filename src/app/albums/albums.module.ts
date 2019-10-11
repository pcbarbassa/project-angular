import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsEditComponent } from './albums-edit/albums-edit.component';
import { GenericModule } from '../generic/generic.module';



@NgModule({
  declarations: [AlbumsDetailComponent, AlbumsListComponent, AlbumsEditComponent],
  imports: [
    CommonModule,
    GenericModule
  ],
  exports: [AlbumsDetailComponent, AlbumsListComponent, AlbumsEditComponent]
})
export class AlbumsModule { }
