import {PhotoComponent} from  './photo.component'
import {WalkpaperComponent} from './walkpaper/walkpaper.component'


export const photoRoutes = [

  {
    path: '',
    component: PhotoComponent,
    children: [
      {
        path: '',
        redirectTo: 'walkpaper',
        pathMatch: 'full'
      },
      {
        path: 'walkpaper',
        component: WalkpaperComponent
      }
    ]
  }
];
