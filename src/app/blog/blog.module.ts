import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {BlogComponent } from  './blog.component'
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogNewComponent } from './blog-new/blog-new.component';

import {blogRoutes} from './blog.routes';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogOneComponent,
    BlogNewComponent
  ],
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  providers: []
})
export class BlogModule { }
