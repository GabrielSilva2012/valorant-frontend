import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-list',
  templateUrl: './filtro-list.component.html',
  styleUrls: ['./filtro-list.component.css']
})
export class FiltroListComponent {
  verificaListar = false
  
  form = new FormGroup({
    skip: new FormControl(0),
    take: new FormControl(10, Validators.required),
  });


  ativaListar(){
    if(this.verificaListar){
      this.verificaListar = false
      this.form.reset()
      this.form.disable()

    }else{
      this.verificaListar = true
      this.form.get('skip')?.enable()
      this.form.get('take')?.enable()
    }
  }

}
