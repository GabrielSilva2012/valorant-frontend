import { Component } from '@angular/core';
import { single } from './data';
import { eventos } from './data';
import { LegendPosition } from '@swimlane/ngx-charts';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent  {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  eventos = []
  single = []
  view: [number, number] = [0, 0];
  view2:[number, number] = [1000, 0];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = false;
  xAxisLabel = 'Skins em Eventos';
  showYAxisLabel = true;
  yAxisLabel = 'Quantidade';
  legendPosition = 'below';

  below = LegendPosition.Below


  

  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { eventos });
    console.log(this.below)
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
