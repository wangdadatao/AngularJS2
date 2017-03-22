import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Note} from "./model/note.model";


@Injectable()
export class BlogService {

  public BASEURL = 'http://localhost:8088/';
  //public BASEURL = 'http://115.159.226.58:8080/';

  constructor(public http:Http) {

  }

  //查询文章列表
  queryNoteList(keyWords:string, pageNum:string, pageSize:string) {
    let params = new URLSearchParams();
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);

    if (keyWords != null && keyWords.length > 0) {
      params.set("keyWords", keyWords);
    }

    return this.makeRequest("note/queryNoteList", params);
  };

  //查询文章类型
  queryTypeList() {
    return this.makeRequest("note/queryTypes", null)
  };

  //根据文章类型查询文章
  queryByType(type:string, pageNum:string, pageSize:string) {
    let params = new URLSearchParams();
    params.set('type', type);
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);
    return this.makeRequest("note/queryByType", params);
  };

  //根据ID查询文章
  queryNoteById(id:string) {
    let params = new URLSearchParams();
    params.set('id', id);
    return this.makeRequest("note/queryByID", params)
  }

  getUrlElement(url:string) {
    let params = new URLSearchParams();
    params.set('url', url);
    return this.makeRequest("api/url/getUrlElement", params)
  }

  //添加新的文章
  addNote(note:Note) {
    let formDate = new FormData();
    formDate.append("title", note.title);
    formDate.append("content", note.content);
    formDate.append("type", note.type);
    return this.sendPost("note/addNote", formDate);
  }


  private makeRequest(path:string, params:URLSearchParams) {
    let url = this.BASEURL + `${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }

  private sendPost(path:string, params:FormData) {
    let url = this.BASEURL + `${ path }`;
    return this.http.post(url, params)
      .map((res) => res.json());
  }


}
