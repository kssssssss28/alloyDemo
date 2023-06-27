import { Component } from '@angular/core';
import { reqOption } from 'src/interface';
import { HttpService } from 'src/service/http.service';

import env from '../../environment.json'
export interface Item {
  name: string;
  // 其他属性...
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  httpService: HttpService
  data: Item[] = [];
  isMock = false
  constructor(httpService:HttpService){
    this.httpService = httpService
    this.isMock = env.mock
  }
  title = 'template';
  request = async (method:string)=>{
    let reqOption:reqOption = {method:method, url:'/api/get'}
    let temp = await this.httpService.sendReq(reqOption)
    this.data = temp.data.data
    console.log(this.data)
  }
}
