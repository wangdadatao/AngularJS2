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

  public blogId;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute,
              public BlogService:BlogService) {

  }

  ngOnInit() {
   /*
    this.queryNoteById(this.blogId);*/
    this.getBlogId();
    console.log(this.blogId);
    this.queryNoteById(this.blogId);
  }

  //根据ID查询文章
  queryNoteById(id:string) {
    this.BlogService.queryNoteById(id)
      .subscribe((result) => {
        this.note = result.content;
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


}
