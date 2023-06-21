import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlloyCardModule } from '@keysight/alloy';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlloyCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
