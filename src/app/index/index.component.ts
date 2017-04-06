import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //"http://www.bing.com/az/hprichbg/rb/MeerkatAmuck_ZH-CN5734433814_1366x768.jpg"
  public imgUrl:any;

  constructor(public http:Http) {
  }

  ngOnInit() {
    this.getBackGround();
  }


  private getBackGround() {

    this.makeRequest()
      .subscribe((result) => {
        console.log(result);
        console.log(result.content);
        console.log(result.content.url);
        this.imgUrl = result.content.url;
        console.log(this.imgUrl);

        let imgDiv = document.getElementById("background-img");
        let backImg = "url(" + this.imgUrl + ") no-repeat fixed center 0";
        console.log(backImg);

        imgDiv.style.background = backImg;
        imgDiv.style.backgroundSize = "100% 100%";
      });


  }


  private makeRequest() {
    let url = "http://182.18.8.174:8080/bigidea/photo/getIndexImg";
    return this.http.get(url)
      .map((res) => res.json());
  }


}
