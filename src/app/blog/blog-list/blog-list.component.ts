import { Component, OnInit } from '@angular/core';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  public backgroundColor; //背景颜色
  public notes;//文章
  public typeList; //文章类型
  public type; //类型
  public pageNum; //页码
  public total; //文章总数
  public pageSize;  //每页数量
  public totalPages;  //总页


  constructor(
    public BlogService:BlogService
  ) { }

  ngOnInit() {
    this.queryTypeList();
    this.queryNoteList(null,'1','20');
  }

  public pageChanged(event:any):void {
    // this.router.navigateByUrl("posts/page/"+event.page);
    this.queryNoteList(null,event.page,'20');
  }



  //查询文章列表
  queryNoteList(keyWords:string, pageNum:string, pageSize:string) {
    this.BlogService.queryNoteList(keyWords,pageNum, pageSize)
      .subscribe((result) => {
        this.notes = result.content;
        this.pageSize = result.options.pageSize;
        this.total = result.options.total;
        this.pageNum = result.options.pageNum;
      });
  }

  //查询文章类型
  queryTypeList(){
    this.BlogService.queryTypeList()
      .subscribe((result) => {
        this.typeList = result.content;
      })
  }

}
