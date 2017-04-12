import {PhotoComponent} from  './photo.component'
import {WallpaperComponent} from './wallpaper/wallpaper.component'
import {PhotoOneComponent} from './photo-one/photo-one.component'

export const photoRoutes = [

  {
    path: '',
    component: PhotoComponent,
    children: [
      {
        path: '',
        redirectTo: 'wallpaper',
        pathMatch: 'full'
      },
      {
        path: 'wallpaper',
        component: WallpaperComponent
      },
      {
        path: 'photoOne/:id',
        component: PhotoOneComponent
      }
    ]
  }
];
