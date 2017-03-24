import {IndexComponent} from './index/index.component';
import {TestComponent} from './test/test.component';
import {AboutComponent} from './about/about.component'


export const appRoutes = [

  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'test', component: TestComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: IndexComponent},

];
