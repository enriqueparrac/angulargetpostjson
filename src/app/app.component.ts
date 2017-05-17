import { Component } from '@angular/core';
import {HTTPTestService} from './app.component-service';

//@Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
//})
//export class AppComponent {
//  title = 'app works!';
//}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
    <div>
      <h2>User Data</h2>
      <form>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control">
        </div>        
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control">
        </div>
      </form>
    </div>
    <br/>

    <button (click)="onGet()">Get Data</button><br/>
    <div>Output:{{getData}}</div><br/>
    <button (click) = "onPost()">Post Data</button><br/>
    <div>Output:{{postData}}</div><br/>
    <button (click) = "onPromiseGet()">Get Data(w Promise)</button><br/>
    <div>Output:{{getPromiseData}}</div><br/>
  `,
  providers:[HTTPTestService]
})

export class HTTPTestComponent{
  getData:string;
  getPromiseData:string;
  postData:string;

  constructor(private _httpService:HTTPTestService){}

  onGet(){
    console.log('Getting user now.');
    this._httpService.getUser().subscribe(
      data =>this.getData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Get')
    );
  }

  onPost(){
    console.log('Begin Post.');
    this._httpService.postJson().subscribe(
      data =>this.postData = JSON.stringify(data),
      error=>alert(error),
      ()=>console.log('Finished Post')
    );
  }  

}