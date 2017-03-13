import {Component, OnInit} from '@angular/core';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-excerpt',
  templateUrl: './blog-excerpt.component.html',
  styleUrls: ['./blog-excerpt.component.css']
})
export class BlogExcerptComponent implements OnInit {

  public excerptUrl;

  public note;

  constructor(public BlogService:BlogService) {
  }

  ngOnInit() {
  }

  analyzeUrl() {
    if (this.excerptUrl) {
      this.getUrlElement(this.excerptUrl);
    } else {
      alert("请输入URL");
    }
    console.log(this.note);
  }

  getUrlElement(url:string) {
    this.BlogService.getUrlElement(url)
      .subscribe((result) => {
        this.note = result.content;
      })
  }

}
