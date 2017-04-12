import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PaginationModule, TabsModule} from 'ng2-bootstrap';
import {FormsModule} from '@angular/forms';

import {PhotoComponent} from  './photo.component'

import {PhotoService} from './photo.service'
import {photoRoutes} from './photo.routes';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { PhotoOneComponent } from './photo-one/photo-one.component';


@NgModule({
  declarations: [
    PhotoComponent,
    WallpaperComponent,
    PhotoOneComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forChild(photoRoutes)
  ],
  providers: [
    PhotoService
  ]
})
export class PhotoModule {
}
