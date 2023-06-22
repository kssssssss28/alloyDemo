import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlloyCardModule } from '@keysight/alloy';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService, ReqInterceptor } from 'src/service/http.service';
import { MockInterceptor } from 'src/mock/mockInterceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlloyCardModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
