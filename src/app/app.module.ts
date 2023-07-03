import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficosModule } from './component/graficos/graficos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './component/Home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GraficosModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
