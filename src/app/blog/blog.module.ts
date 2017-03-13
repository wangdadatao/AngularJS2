import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PaginationModule, TabsModule} from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';

import {BlogComponent} from  './blog.component'
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogOneComponent} from './blog-one/blog-one.component';
import {BlogNewComponent} from './blog-new/blog-new.component';
import { BlogExcerptComponent } from './blog-excerpt/blog-excerpt.component';

import {BlogService} from './blog.service'
import {blogRoutes} from './blog.routes';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogOneComponent,
    BlogNewComponent,
    BlogExcerptComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forChild(blogRoutes)
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule {
}
