import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtro-displayname',
  templateUrl: './filtro-displayname.component.html',
  styleUrls: ['./filtro-displayname.component.css']
})
export class FiltroDisplaynameComponent {

  verificaDisplayName = false
  verificaNot = false

  @Input()
  filtroSkin: boolean | undefined
  
  form = new FormGroup({
    contains: new FormControl({ value: '', disabled: true }),
    equals: new FormControl({ value: '', disabled: true }),
    in: new FormControl({ value: '', disabled: true }),
    notContains: new FormControl({ value: '', disabled: true }),
    notEquals: new FormControl({ value: '', disabled: true }),
    notIn: new FormControl({ value: '', disabled: true }),
    mode: new FormControl('')
  });

  selecaoWeapons: string[] = ['Classic', 'Shorty', 'Melle', 'Ghost', 'Frenzy', 'Sheriff', 'Bucky', 'Judge', 'Stinger', 'Spectre', 'Guardian', 'Bulldog', 'Vandal', 'Ares', 'Odin'];
  mostrarForm(){
    console.log(this.form.value)
  }

  ativaDisplayName(){
    if(this.verificaDisplayName){
      this.verificaDisplayName = false
      this.verificaNot = false
      this.form.reset()
      this.form.disable()

    }else{
      this.verificaDisplayName = true
      this.form.get('contains')?.enable()
      this.form.get('equals')?.enable()
      this.form.get('in')?.enable()
      this.form.get('mode')?.enable()
    }
  }

  ativaNot(){
    if(this.verificaNot){
      this.verificaNot = false
      this.form.get('notContains')?.reset()
      this.form.get('notEquals')?.reset()
      this.form.get('notIn')?.reset()
      this.form.get('notContains')?.disable()
      this.form.get('notEquals')?.disable()
      this.form.get('notIn')?.disable()
    }else if(!this.verificaNot && this.verificaDisplayName){
      this.verificaNot = true
      this.form.get('notContains')?.enable()
      this.form.get('notEquals')?.enable()
      this.form.get('notIn')?.enable()
    }
  }


}
