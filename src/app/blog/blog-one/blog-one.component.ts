import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {BlogService} from '../blog.service';
import {Note} from "../model/note.model";

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {

  public test = "hahah";

  public note:Note;

  public showContent:string;

  public blogId;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public BlogService:BlogService) {

  }

  ngOnInit() {
    this.getBlogId();
    this.queryNoteById(this.blogId);
  }

  //根据ID查询文章
  queryNoteById(id:string) {
    this.BlogService.queryNoteById(id)
      .subscribe((result) => {
        this.note = result.content;
        this.showContent = this.note.content;
        console.log(this.note.type);
        console.log(this.note.createTime);
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
      this.showContent = this.note.content;
    } else if (num == 2) {
      console.log(num);
      this.showContent = this.note.contentNoElement;
    } else if (num == 3) {
      console.log(num);
    }
  }

}
