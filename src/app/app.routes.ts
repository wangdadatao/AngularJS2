import {IndexComponent} from './index/index.component';
import {TestComponent} from './test/test.component';


export const appRoutes = [

  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'test', component: TestComponent},
  {path: '**', component: IndexComponent},

];
