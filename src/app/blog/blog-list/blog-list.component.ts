import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {flyIn} from '../../animations/fly-in';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  animations: [
    flyIn
  ]
})
export class BlogListComponent implements OnInit {

  public backgroundColor; //背景颜色
  public blogs;//文章
  public typeList; //文章类型
  public type; //类型
  public pageNum; //页码
  public total; //文章总数
  public pageSize;  //每页数量
  public totalPages;  //总页

  public currentPage:number = 1;


  constructor(public BlogService:BlogService) {
  }

  //初始化
  ngOnInit() {
    this.queryTypeList();
    this.queryBlogList(null, '1', '20');
  }

  public pageChanged(event:any):void {
    // this.router.navigateByUrl("posts/page/"+event.page);
    this.pageNum = event.page;
    if (this.type == null) {
      this.queryBlogList(null, event.page, '20');
    } else {
      this.queryByType(this.type, event.page, '20');
    }
    this.changeScrollBar();
  }


  //查询文章列表
  queryBlogList(keyWords:string, pageNum:string, pageSize:string) {
    this.BlogService.queryBlogList(keyWords, pageNum, pageSize)
      .subscribe((result) => {
        this.dealWithResult(result);
      });
  }

  //查询文章类型
  queryTypeList() {
    this.BlogService.queryTypeList()
      .subscribe((result) => {
        this.typeList = result.content;
      });
  }

  //根据分类查询文章
  queryByType(type:string, pageNum:string, pageSize:string) {
    this.BlogService.queryByType(type, pageNum, pageSize)
      .subscribe((result) => {
        this.dealWithResult(result);
      });
  }

  //处理请求结果
  dealWithResult(result) {
    this.blogs = result.content;
    this.pageSize = result.options.pageSize;
    this.total = result.options.total;
    this.pageNum = result.options.pageNum;
    this.totalPages = Math.ceil(this.total / this.pageSize);
    console.log("总页数是： " + this.totalPages);
  }

  //改变类别
  changeType(choiceType:string) {
    this.currentPage = 1;
    this.type = choiceType;
    console.log("选择的类别是： " + this.type);

    if (choiceType == undefined) {
      this.ngOnInit();
    } else {
      this.queryByType(choiceType, '1', '20');
    }

    this.changeScrollBar();
  }

  //滚动条指定
  private changeScrollBar() {
    document.body.scrollTop = 0;
  }
}
