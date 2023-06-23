import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Mock from 'mockjs';
import { of } from 'rxjs';
import * as isMock from '../../environments.json';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

    constructor() {}
    mockConfig = {
      '/api/get': {
        'data|10': [
          {
            'name': '@name',
            'age|20-30': 1,
            'id|+1': 1
          }
        ]
      },
      '/api/post': {
        'data|5': [
          {
            'title': '@ctitle',
            'content': '@cparagraph'
          }
        ]
      }
    };
    private getMockData(url: string): any {
      // @ts-ignore
      let config = this.mockConfig[url]
      return config
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const mockData = this.getMockData(req.url);
      if (isMock.mock) { // 判断是否开启Mock.js
        const mockResponse = Mock.mock(mockData);
        return of(new HttpResponse({ status: 200, body: mockResponse }));
      
      }
      return next.handle(req);
    }
  }