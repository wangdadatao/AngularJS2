import {Component} from '@angular/core';

@Component({
  selector: 'app-blogList',
  templateUrl: '../blog/blog.component.html',
  styleUrls: ['../blog/blog.component.css']
})
export class BlogComponent {

  public toggler = true;

  constructor() {

  }

  toggle(div:any) {
    if (this.toggler) {
      div.target.classList.add("in");
    } else {
      div.target.classList.remove("in");
    }
    this.toggler = !this.toggler;
  }
}
