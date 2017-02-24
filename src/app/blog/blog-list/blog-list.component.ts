import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public backgroundColor; //背景颜色
  public notes;//文章
  public typeList; //文章类型
  public type; //类型
  public pageNum; //页码
  public total; //文章总数
  public pageSize;  //每页数量
  public totalPages;  //总页

  public currentPage:number = 1;


  constructor(public BlogService:BlogService) {
  }

  ngOnInit() {
    this.queryTypeList();
    this.queryNoteList(null, '1', '20');
  }

  public pageChanged(event:any):void {
    // this.router.navigateByUrl("posts/page/"+event.page);
    this.pageNum = event.page;
    if (this.type == null) {
      this.queryNoteList(null, event.page, '20');
    } else {
      this.queryByType(this.type, event.page, '20');
    }

  }


  //查询文章列表
  queryNoteList(keyWords:string, pageNum:string, pageSize:string) {
    this.BlogService.queryNoteList(keyWords, pageNum, pageSize)
      .subscribe((result) => {
        /*this.notes = result.content;
         this.pageSize = result.options.pageSize;
         this.total = result.options.total;
         this.pageNum = result.options.pageNum;
         this.totalPages = Math.ceil(this.total / this.pageSize);*/
        this.dealWithResult(result);
      });
  }

  //查询文章类型
  queryTypeList() {
    this.BlogService.queryTypeList()
      .subscribe((result) => {
        this.typeList = result.content;
      })
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
    this.notes = result.content;
    this.pageSize = result.options.pageSize;
    this.total = result.options.total;
    this.pageNum = result.options.pageNum;
    this.totalPages = Math.ceil(this.total / this.pageSize);
    console.log("总页数是： " + this.totalPages);
  }


  changeType(choiceType:string) {
    this.currentPage = 1;
    console.log("选择的类别是：" + choiceType);
    this.type = choiceType;
    this.queryByType(choiceType, '1', '20');
  }

}
