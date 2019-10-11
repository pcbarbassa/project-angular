import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosDetailComponent } from './photos-detail/photos-detail.component';
import { PhotosEditComponent } from './photos-edit/photos-edit.component';



@NgModule({
  declarations: [PhotosListComponent, PhotosDetailComponent, PhotosEditComponent],
  imports: [
    CommonModule
  ]
})
export class PhotosModule { }
