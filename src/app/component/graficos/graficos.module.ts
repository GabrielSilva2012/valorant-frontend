import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficosComponent } from './graficos.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    GraficosComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatInputModule,
  ],
  exports: [GraficosComponent],
  providers: [],
  bootstrap: []
})
export class GraficosModule { }