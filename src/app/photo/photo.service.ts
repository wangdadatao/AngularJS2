import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Config} from '../config.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PhotoService {

  // public BASEURL = 'http://localhost:8088/';
  public BASEURL = new Config().BASEURL;


  constructor(public http:Http) {

  }

  //根据文章类型查询文章
  queryWalkpaper(keyWords:string, pageNum, pageSize) {
    let params = new URLSearchParams();
    params.set('keyWords', keyWords);
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);
    return this.makeRequest("photo/walkpaper/queryWalkpaper", params);
  };


  private makeRequest(path:string, params:URLSearchParams) {
    let url = this.BASEURL + `${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }

}
