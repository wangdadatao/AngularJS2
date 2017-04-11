import {IndexComponent} from './index/index.component';
import {TestComponent} from './test/test.component';
import {AboutComponent} from './about/about.component';
import {ApiComponent} from "./api/api.component";

export const appRoutes = [

  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'test', component: TestComponent},
  {path: 'about', component: AboutComponent},
  {path: 'api', component: ApiComponent},
  {path: 'photo', loadChildren: './photo/photo.module#PhotoModule'},
  {path: '**', component: IndexComponent},

];
