import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PhotoService {

  // public BASEURL = 'http://localhost:8088/';
  public BASEURL = 'http://182.18.8.174:8080/bigidea/';


  constructor(public http:Http) {

  }




}
