import {IndexComponent} from './index/index.component';

export const appRoutes = [

  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: '**', component: IndexComponent},

];
