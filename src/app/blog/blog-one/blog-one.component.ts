import { Component, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit{

  
  public blogId;

  constructor(public router:Router,
              public activeRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.getBlogId();
  }

  //得到当前BlogId
  getBlogId() {
    this.activeRoute.params.subscribe(
      params => {
        console.log(params);
        this.blogId = params;
        this.blogId = this.blogId.blogId;
        console.log(this.blogId);
      }
    );
  }



}
