import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FiltroWeaponComponent } from './filtro-weapon/filtro-weapon.component';
import {  MatDialogModule } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FiltroDisplaynameComponent } from './filtro-displayname/filtro-displayname.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FiltroCategoryComponent } from './filtro-category/filtro-category.component';
import { FiltroListComponent } from './filtro-list/filtro-list.component';
import { FiltroSkinsComponent } from './filtro-skins/filtro-skins.component';




@NgModule({
  declarations: [
    HomeComponent,
    FiltroWeaponComponent,
    FiltroDisplaynameComponent,
    FiltroCategoryComponent,
    FiltroListComponent,
    FiltroSkinsComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
