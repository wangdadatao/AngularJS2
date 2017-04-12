import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {PhotoService} from '../photo.service'
import {Walkpaper} from "../model/walkpaper.model";

@Component({
  selector: 'app-walkpaper',
  templateUrl: './walkpaper.component.html',
  styleUrls: ['./walkpaper.component.css']
})
export class WalkpaperComponent implements OnInit {

  public walkpapers:any[];
  public keyWords;

  public pageNum = 1;
  public pageSize = 10;
  public total;

  public moreNum = 1;

  constructor(public photoService:PhotoService,
              public router:Router) {

  }


  ngOnInit() {
    this.queryWalkpaper(null, this.pageNum, this.pageSize);
  }

  //关键词搜索壁纸
  searchPhoto() {
    this.pageNum = 1;
    this.pageSize = 10;
    this.moreNum = 1;
    this.queryWalkpaper(this.keyWords, this.pageNum, this.pageSize);
  }

  //监听滚动条
  @HostListener('window:scroll', [])
  listenScrollbar() {
    let foot = document.getElementById("ph-wa-al-more");
    let footHeight = foot.offsetTop - document.body.scrollTop;

    //判断是否要加载更多
    if (footHeight < 900 && this.moreNum - this.pageNum == 0) {
      console.log("加载更多。。。");
      this.pageNum++;
      this.photoService.queryWalkpaper(this.keyWords, this.pageNum, this.pageSize)
        .subscribe((result) => {
          let resultContent:any[] = result.content;
          this.walkpapers = this.walkpapers.concat(resultContent);
          this.total = result.options.total;
          if (resultContent.length == this.pageSize) {
            this.moreNum++;
          }
        });
    }
  }


  //去照片图片详情页
  showOne(id) {
    this.router.navigateByUrl('/photo/photoOne/' + id);
  }

  updateSrc(event, walkpaper:Walkpaper) {
    console.log(event.outerHeight);

    event.src = walkpaper.baseUrl;
  }

  //查询壁纸
  queryWalkpaper(keyWords, pageNum, pageSize) {
    this.photoService.queryWalkpaper(keyWords, pageNum, pageSize)
      .subscribe((result) => {
        this.walkpapers = result.content;
        this.total = result.options.total;
      });
  }

}
