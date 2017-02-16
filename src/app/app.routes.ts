import {IndexComponent} from './index/index.component';

export const appRoutes=[
 /* {
    path:'',
    redirectTo:'blog',
    pathMatch:'full'
  },*/
  { path:'blog', loadChildren:'./blog/blog.module#BlogModule'},
  { path:'**', component:IndexComponent}
];
