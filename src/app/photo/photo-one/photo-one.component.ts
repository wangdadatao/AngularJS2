import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {PhotoService} from '../photo.service'

@Component({
  selector: 'app-photo-one',
  templateUrl: './photo-one.component.html',
  styleUrls: ['./photo-one.component.css']
})
export class PhotoOneComponent implements OnInit {

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public photoService:PhotoService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params['id']);
    });
  }

}
