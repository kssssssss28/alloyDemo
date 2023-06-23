import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { reqOption } from 'src/interface';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  constructor(private configService: HttpService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let modifiedRequest = request.clone({});
    // Add token here
    return next.handle(modifiedRequest);
  }
}

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  async sendReq(req: reqOption) {
    let res = null;
    if (req.method === 'GET') {
      res = this.http.get<any>(req.url, { observe: 'response' });
    } else if (req.method === 'POST') {
      res = this.http.post<any>(req.url, req.payload, { observe: 'response' });
    }
    return this.getResponse(res).toPromise()
  }
  

  private getResponse(res:any): Observable<any> {
    return res.pipe(
      map((data: HttpResponse<any>) => {
        return { status: data.status, data:data.body };
      }),
      catchError((error: any) => {
        throw error; 
      })
    )
  }
  
}
