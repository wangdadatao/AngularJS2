import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Blog} from './model/blog.model';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BlogService {

  // public BASEURL = 'http://localhost:8088/';
  public BASEURL = 'http://182.18.8.174:8080/';

  constructor(public http:Http) {

  }

  //查询文章列表
  queryBlogList(keyWords:string, pageNum:string, pageSize:string) {
    let params = new URLSearchParams();
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);

    if (keyWords != null && keyWords.length > 0) {
      params.set("keyWords", keyWords);
    }

    return this.makeRequest("blog/queryBlogList", params);
  };

  //查询文章类型
  queryTypeList() {
    return this.makeRequest("blog/queryTypes", null)
  };

  //根据文章类型查询文章
  queryByType(type:string, pageNum:string, pageSize:string) {
    let params = new URLSearchParams();
    params.set('type', type);
    params.set('pageNum', pageNum);
    params.set('pageSize', pageSize);
    return this.makeRequest("blog/queryByType", params);
  };

  //根据ID查询文章
  queryBlogById(id:string) {
    let params = new URLSearchParams();
    params.set('id', id);
    return this.makeRequest("blog/queryByID", params)
  }

  getUrlElement(url:string) {
    let params = new URLSearchParams();
    params.set('url', url);
    return this.makeRequest("api/url/getUrlElement", params)
  }

  //添加新的文章
  addBlog(blog:Blog) {
    let formDate = new FormData();
    formDate.append("title", blog.title);
    formDate.append("content", blog.content);
    formDate.append("type", blog.type);
    return this.sendPost("blog/addBlog", formDate);
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
