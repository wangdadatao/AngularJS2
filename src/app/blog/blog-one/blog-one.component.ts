import {Component, OnInit,ViewEncapsulation} from '@angular/core';
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

  public test = "hahah";

  public blog:Blog;

  public showContent:string;

  public blogId;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public BlogService:BlogService) {

  }

  ngOnInit() {
    this.getBlogId();
    this.queryBlogById(this.blogId);
  }

  //根据ID查询文章
  queryBlogById(id:string) {
    this.BlogService.queryBlogById(id)
      .subscribe((result) => {
        this.blog = result.content;
        this.showContent = this.blog.content;
        console.log(this.blog.type);
        console.log(this.blog.createTime);
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
