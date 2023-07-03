import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FiltroCategoryComponent } from '../filtro-category/filtro-category.component';
import { FiltroDisplaynameComponent } from '../filtro-displayname/filtro-displayname.component';
import { FiltroListComponent } from '../filtro-list/filtro-list.component';
import { WeaponFilterDTO } from '../filtro.dto';
import { HomeService } from '../../home.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtro-skins',
  templateUrl: './filtro-skins.component.html',
  styleUrls: ['./filtro-skins.component.css']
})
export class FiltroSkinsComponent {

  constructor(
    public homeService: HomeService,
    public dialogRef: MatDialogRef<FiltroSkinsComponent>,
  ){

  }

  @ViewChildren(FiltroDisplaynameComponent)
  filtrosDisplayNames: QueryList<FiltroDisplaynameComponent> | undefined;

  @ViewChild(FiltroListComponent) 
  filtroList: FiltroListComponent | undefined;

  @ViewChild(FiltroCategoryComponent) 
  filtroCategory: FiltroCategoryComponent | undefined;

  filtrarSkin = false

  tier= false
  theme= false
  reward= false
  chromas= false
  levels= false
  weapon= false

  formList: FormGroup | undefined;
  formPadrao: FormGroup | undefined;
  formCategory: FormGroup | undefined;
  formWeapon: FormGroup | undefined;


  alterarTier(){
    this.tier = !this.tier
  }

  alterarTheme(){
    this.theme = !this.theme

  }
  alterarReward(){
    this.reward = !this.reward

  }
  alterarChromas(){
   this.chromas = !this.chromas

  }
  alterarLevels(){
    this.levels = !this.levels
  }
  alterarWeapon(){
    this.weapon = !this.weapon
  }

createDisplayNameQuery(form?: FormGroup){
  const displayNameQuery: any = {};

  const notQuery: any = {}; 

  if(form?.status != 'DISABLED' && form){
   
  
  if (form?.get('equals')?.value !== "") {
    displayNameQuery.equals = form?.get('equals')?.value;
  }
  
  if (form?.get('contains')?.value !== "") {
    displayNameQuery.contains = form?.get('contains')?.value;
  }
  
  
  if (form?.get('mode')?.value !== "") {
    displayNameQuery.mode = form?.get('mode')?.value;
  }
  
  if (form?.get('notEquals')?.value !== '') {
    notQuery.equals = form?.get('notEquals')?.value;
  }
  
  if (form?.get('notContains')?.value !== '') {
    notQuery.contains = form?.get('notContains')?.value;
  }
  
  
  if (Object.keys(notQuery).length > 0) {
    displayNameQuery.not = notQuery;
  }
  }
  


  return displayNameQuery;
}
createDisplayNameQueryWeapon(form?: FormGroup){
  const displayNameQuery: any = {};

  const notQuery: any = {}; 

  if(form?.status != 'DISABLED' && form){
   
  
  if (form?.get('equals')?.value !== "") {
    displayNameQuery.equals = form?.get('equals')?.value;
  }
  
  if (form?.get('contains')?.value !== "") {
    displayNameQuery.contains = form?.get('contains')?.value;
  }
  
  if (form?.get('in')?.value !== "") {
    displayNameQuery.in = form?.get('in')?.value;
  }
  
  if (form?.get('mode')?.value !== "") {
    displayNameQuery.mode = form?.get('mode')?.value;
  }
  
  if (form?.get('notEquals')?.value !== '') {
    notQuery.equals = form?.get('notEquals')?.value;
  }
  
  if (form?.get('notContains')?.value !== '') {
    notQuery.contains = form?.get('notContains')?.value;
  }
  
  if (form?.get('notIn')?.value !== '') {
    notQuery.in = form?.get('notIn')?.value;
  }
  
  if (Object.keys(notQuery).length > 0) {
    displayNameQuery.not = notQuery;
  }
  }
  


  return displayNameQuery;
}

createCategoryQuery(form?: FormGroup){
  const categoryQuery: any = {};

  const notCategoryQuery: any = {}; 

  if(form?.status != 'DISABLED'  && form){

  if(this.formCategory?.get('equals')?.value != ''){
    categoryQuery.equals = this.formCategory?.get('equals')?.value
  }
  if(this.formCategory?.get('in')?.value != ''){
    categoryQuery.in = this.formCategory?.get('in')?.value
  }
  if(this.formCategory?.get('notEquals')?.value != ''){
    notCategoryQuery.equals = this.formCategory?.get('notEquals')?.value
  }

  if(this.formCategory?.get('notIn')?.value != ''){
    notCategoryQuery.in = this.formCategory?.get('notIn')?.value
  }

  if (Object.keys(notCategoryQuery).length > 0) {
    categoryQuery.not = notCategoryQuery;
  }
}
  return categoryQuery
} 


filtrarSkins(){
  let contador = 0
  this.formList = this.filtroList?.form
  this.formCategory = this.filtroCategory?.form


   this.filtrosDisplayNames?.forEach(filtro => {
     contador += 1
     if(contador == 1){
       this.formPadrao = filtro.form
     }else if(contador == 2){
       this.formWeapon  = filtro.form
     }
   });
  
  const query: WeaponFilterDTO = {
    "skip": this.formList?.get('skip')?.value,
    "take": this.formList?.get('take')?.value,
    "include": {
      weapon: this.weapon,
      tier: this.tier,
      theme: this.theme,
      reward: this.reward,
      chromas: this.chromas,
      levels: this.levels
    }, where: {
      displayName: this.createDisplayNameQuery(this.formPadrao),
      weapon: {displayName:this.createDisplayNameQueryWeapon(this.formWeapon),
              category: this.createCategoryQuery(this.formList)
       }
    }
  }
  this.homeService.filtrarSkinPaginated(query).subscribe(result =>{
    this.dialogRef.close(result)
  })
}

fecharModal(){
  this.dialogRef.close()
}

}
