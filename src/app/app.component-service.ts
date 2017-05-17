
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPTestService{
  constructor(private _http:Http){}

    getUser(){
      return this._http.get("http://127.0.0.1:8000/users/2/?format=json")
      .map(res=>res.json());
//      return this._http.get("http://127.0.0.1:8000/users/?format=json")
//      .map(res=>res.json());
    };

    postJson(){
      var json = JSON.stringify({
        username: 'new user',
        email: 'new email'
//        userId: 2
      });
      var params = 'data=' + json;
      var header = new Headers();
      header.append('Content-type', 'application/json');

      return this._http.post("http://127.0.0.1:8000/users",params, {
        headers:header
      })
      .map(res => res.json());
    };

}