import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FiltroDisplaynameComponent } from '../filtro-displayname/filtro-displayname.component';
import { FiltroListComponent } from '../filtro-list/filtro-list.component';
import { FiltroCategoryComponent } from '../filtro-category/filtro-category.component';
import { QueryDTO } from '../filtro.dto';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-filtro-weapon',
  templateUrl: './filtro-weapon.component.html',
  styleUrls: ['./filtro-weapon.component.css']
})
export class FiltroWeaponComponent {

  constructor(
    public dialogRef: MatDialogRef<FiltroWeaponComponent>,
    public homeService: HomeService
    
  ) { 
  }
  @ViewChildren(FiltroDisplaynameComponent)
  filtrosDisplayNames: QueryList<FiltroDisplaynameComponent> | undefined;

  @ViewChild(FiltroListComponent) 
  filtroList: FiltroListComponent | undefined;

  @ViewChild(FiltroCategoryComponent) 
  filtroCategory: FiltroCategoryComponent | undefined;

  filtrarSkin = false

  formList: FormGroup | undefined;
  formPadrao: FormGroup | undefined;
  formCategory: FormGroup | undefined;
  formEvery: FormGroup | undefined;
  formSome:  FormGroup | undefined;
  formNone: FormGroup | undefined;


  selecaoWeapons: string[] = ['Classic', 'Shorty', 'Frenzy', 'Sheriff', 'Bucky', 'Judge', 'Stinger', 'Spectre', 'Guardian', 'Bulldog', 'Vandal', 'Ares', 'Odin'];
  selecaoClassificacao: string[] = ['Heavy', 'Rifle', 'Shotgun', 'Sidearm', 'Sniper', 'SMG', 'Melee'];

  filtroSkin(){
    if(this.filtrarSkin){
      this.filtrarSkin = false
    }else{
      this.filtrarSkin = true
    }
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

  createSkinsQuery(formEvery?: FormGroup, formSome?: FormGroup, formNone?: FormGroup){

    
    const skinQuery: any = {};


    if(formEvery?.status != 'DISABLED' && formEvery){
      const everyQuery: any = {}; 

      everyQuery.displayName =  this.createDisplayNameQuery(formEvery)
  
      if (Object.keys(everyQuery.displayName).length > 0) {
        skinQuery.every = everyQuery;
      }
    }
    

    if(formSome?.status != 'DISABLED' && formSome){
      const someQuery: any = {};
      someQuery.displayName =  this.createDisplayNameQuery(formSome) 
      if (Object.keys(someQuery.displayName).length > 0) {
        skinQuery.some = someQuery;
      }
    }
    

    if(formNone?.status != 'DISABLED' && formSome){
      const noneQuery: any = {}; 

    noneQuery.displayName =  this.createDisplayNameQuery(formNone)

    if (Object.keys(noneQuery.displayName).length > 0) {
      skinQuery.none = noneQuery;
    }

    }
    
   


    
   

    return skinQuery
    


  }
  filtrarDados() {
   let contador = 0
   this.formList = this.filtroList?.form
   this.formCategory = this.filtroCategory?.form

 
    this.filtrosDisplayNames?.forEach(filtro => {
      contador += 1
      if(contador == 1){
        this.formPadrao = filtro.form
      }else if(contador == 2){
        this.formEvery  = filtro.form
      }else if(contador == 3){
        this.formSome  = filtro.form
      }else {
        this.formNone  = filtro.form
      }
    });



  const query: QueryDTO = {
    "skip": this.formList?.get('skip')?.value,
    "take": this.formList?.get('take')?.value,
    "include": {
      "skins": this.filtrarSkin
    }, where: {
      displayName: this.createDisplayNameQuery(this.formPadrao),
      category: this.createCategoryQuery(this.formCategory),
      skins: this.createSkinsQuery(this.formEvery,this.formSome, this.formNone)
      
    }
  }

  this.homeService.filtrarWeaponPaginated(query).subscribe((respost)=>{

    this.dialogRef.close(respost)
  })
  }
  
  fechar(respost?: any){
    this.dialogRef.close(respost)
  }
}

