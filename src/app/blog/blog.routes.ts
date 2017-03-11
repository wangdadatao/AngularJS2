import {BlogComponent} from  './blog.component'
import {BlogListComponent} from './blog-list/blog-list.component';
import {BlogOneComponent} from './blog-one/blog-one.component';
import {BlogNewComponent} from './blog-new/blog-new.component';
import {BlogExcerptComponent} from './blog-excerpt/blog-excerpt.component';


export const blogRoutes = [

  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'blogDetail/:blogId',
        component: BlogOneComponent
      },
      {
        path: 'all',
        component: BlogListComponent
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'new',
        component: BlogNewComponent
      },
      {
        path: 'excerpt',
        component: BlogExcerptComponent
      }
    ]
  }
];
