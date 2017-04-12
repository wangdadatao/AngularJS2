import {PhotoComponent} from  './photo.component'
import {WalkpaperComponent} from './walkpaper/walkpaper.component'
import {PhotoOneComponent} from './photo-one/photo-one.component'

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
      },
      {
        path: 'photoOne/:id',
        component: PhotoOneComponent
      }
    ]
  }
];
