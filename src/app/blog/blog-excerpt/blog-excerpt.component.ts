import {Component, OnInit} from '@angular/core';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-excerpt',
  templateUrl: './blog-excerpt.component.html',
  styleUrls: ['./blog-excerpt.component.css']
})
export class BlogExcerptComponent implements OnInit {

  public excerptUrl;

  constructor(public BlogService:BlogService) {
  }

  ngOnInit() {
  }

  analyzeUrl() {
    console.log(this.excerptUrl);
  }

}
