import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtro-category',
  templateUrl: './filtro-category.component.html',
  styleUrls: ['./filtro-category.component.css']
})
export class FiltroCategoryComponent {

  verificaDisplayName = false
  verificaNot = false
  
  form = new FormGroup({
    equals: new FormControl({ value: '', disabled: true }),
    in: new FormControl({ value: '', disabled: true }),
    notEquals: new FormControl({ value: '', disabled: true }),
    notIn: new FormControl({ value: '', disabled: true }),
  });

  selecaoCategorys: string[] = ['Heavy', 'Rifle', 'Shotgun', 'Sidearm', 'Sniper', 'SMG', 'Melee'];
  selecaoWeapons: string[] = ['Classic', 'Shorty', 'Frenzy', 'Sheriff', 'Bucky', 'Judge', 'Stinger', 'Spectre', 'Guardian', 'Bulldog', 'Vandal', 'Ares', 'Odin'];
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
      this.form.get('equals')?.enable()
      this.form.get('in')?.enable()
    }
  }

  ativaNot(){
    if(this.verificaNot){
      this.verificaNot = false
      this.form.get('notEquals')?.reset()
      this.form.get('notIn')?.reset()

      this.form.get('notEquals')?.disable()
      this.form.get('notIn')?.disable()
    }else if(!this.verificaNot && this.verificaDisplayName){
      this.verificaNot = true
      this.form.get('notEquals')?.enable()
      this.form.get('notIn')?.enable()
    }
  }

}
