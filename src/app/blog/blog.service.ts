import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BlogService {
  public baseUrl = 'http://115.159.226.58:8080/';
  public BlogListURL = this.baseUrl + 'note/queryNoteList';

  constructor(public http:Http) { }

  //查询文章列表
  queryNoteList(keyWords:string, pageNum:string, pageSize:string) {
    let params = new URLSearchParams();
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);

    if(keyWords != null && keyWords.length>0){
      params.set("keyWords",keyWords);
    }

    return this.makeRequest("note/queryNoteList", params);
  };

  //查询文章类型
  queryTypeList(){
    return this.makeRequest("note/write/queryTypes",null)
  }

  private makeRequest(path:string, params:URLSearchParams) {
    //let url = `http://115.159.226.58:8080/${ path }`;
    let url = `http://localhost:8081/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }


}
