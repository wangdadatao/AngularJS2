import {Component, OnInit, HostListener, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {flyIn} from '../../animations/fly-in';

import {BlogService} from '../blog.service';
import {Blog} from "../model/blog.model";

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    flyIn
  ]
})
export class BlogOneComponent implements OnInit {


  public blog:Blog;
  public showContent:string;
  public blogId;
  public scrollTop:number;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public BlogService:BlogService) {

  }

  ngOnInit() {
    this.getBlogId();
    this.queryBlogById(this.blogId);
  }

  //监听滚动条高度
  @HostListener('window:scroll', [])
  listenScrollTop() {
    this.scrollTop = document.body.scrollTop;
  }

  //回到顶部
  public goTop() {
    document.body.scrollTop = 0;
  }

  //根据ID查询文章
  queryBlogById(id:string) {
    this.BlogService.queryBlogById(id)
      .subscribe((result) => {
        this.blog = result.content;
        this.showContent = this.blog.content;
      });
  }

  //得到当前BlogId
  getBlogId() {
    this.activeRoute.params.subscribe(
      params => {
        this.blogId = params;
        this.blogId = this.blogId.blogId;
      }
    );
  }

  //显示不同的内容
  showOther(num:number) {
    if (num == 1) {
      console.log(num);
      this.showContent = this.blog.content;
    } else if (num == 2) {
      console.log(num);
      this.showContent = this.blog.contentNoElement;
    } else if (num == 3) {
      console.log(num);
    }
  }

}
