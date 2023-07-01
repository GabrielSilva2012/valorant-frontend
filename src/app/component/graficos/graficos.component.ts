import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { reaward, single } from './data';
import { eventos } from './data';
import { LegendPosition } from '@swimlane/ngx-charts';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {

  selecaoArmasControl = new FormControl('');
  relacionamentosControl = new FormControl('');
  agentsControl = new FormControl('');
  reawardsControl = new FormControl('');



  selecaoArmas: string[] = ['Classic', 'Shorty', 'Frenzy', 'Sheriff', 'Bucky', 'Judge', 'Stinger', 'Spectre', 'Guardian', 'Bulldog', 'Vandal', 'Ares', 'Odin'];
  relacionamentos: string[]= ['Reawards', 'Agents', 'Contracts', 'Skins', 'Themes']
  agents: string[]= ['Iniciador', 'Duelista', 'Sentinela', 'Controlador']
  reawards: string[]= ['Agent', 'Title', 'Spray', 'Card', 'Currency', 'Buddy', 'Skin']
  eventos = []
  single = []
  reaward = []

  view: [number, number] = [0, 0];
  view2:[number, number] = [1000, 0];

  cardColor: string = '#232837';

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
    Object.assign(this, { reaward });
  }

  


  ngOnInit(): void {
    console.log(this.selecaoArmasControl)
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

  filtarArmas(){
    console.log(this.selecaoArmasControl.value)
  }
  filtarRelacionamentos(){
    console.log(this.relacionamentosControl.value)
  }
  filtarAgentes(){
    console.log(this.agentsControl.value)
  }

  filtarReawards(){
    console.log(this.reawardsControl.value)
  }
}
