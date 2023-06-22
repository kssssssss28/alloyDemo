import { Component } from '@angular/core';
import { reqOption, sendRequest } from './utils';
import { HttpService } from 'src/service/http.service';
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
  constructor(httpService:HttpService){
    this.httpService = httpService
  }
  title = 'template';
  request = async (method:string)=>{
    let reqOption:reqOption = {method:method, url:'/api/get'}
    let temp = await this.httpService.sendReq(reqOption)
    this.data = temp.data.data
    console.log(this.data)
  }
}
