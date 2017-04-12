import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../photo.service";

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

  public id;
  public basePhoto;
  public similyPhoto;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      this.id = params['id'];
      this.queryById(this.id, 'wallpaper');
    });
    this.goTop()
  }

  //去照片图片详情页
  showOne(id) {
    this.router.navigateByUrl('/photo/photoOne/' + id);
    this.goTop();
  }

  queryById(id, type) {
    this.photoService.queryById(id, type)
      .subscribe((result) => {
        this.basePhoto = result.content.point;
        console.log(this.basePhoto.baseUrl);
        this.similyPhoto = result.content.similar
      });
  }

  //滚动条去最顶端
  goTop() {
    document.body.scrollTop = 100;
  }

}
