import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { PaginationModule } from 'ng2-bootstrap';

import {BlogComponent } from  './blog.component'
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogNewComponent } from './blog-new/blog-new.component';

import {BlogService} from './blog.service'

import {blogRoutes} from './blog.routes';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogOneComponent,
    BlogNewComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(blogRoutes)
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
