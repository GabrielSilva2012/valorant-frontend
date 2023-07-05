import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { FormControl } from '@angular/forms';
import { GraficosService } from './graficos.service';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {
  

  selecaoArmasControl = new FormControl('');
  rewardsControl = new FormControl('');
  agentsControl = new FormControl('');
  xpsControl = new FormControl('');



  selecaoArmas: string[] = ['Classic', 'Shorty', 'Frenzy', 'Sheriff', 'Bucky', 'Judge', 'Stinger', 'Spectre', 'Guardian', 'Bulldog', 'Vandal', 'Ares', 'Odin'];
  selecaoReawards: string[]= ['Spray', 'Card', 'Title', 'Buddy', 'Skin', 'Currency']
  selecaoAgents: string[]= ['Initiator', 'Sentinel', 'Duelist', 'Controller']
  selecaoContratos: string[]= ['Agent', 'Event', 'Season']




  armas: any = []
  rewards: any = []
  agents: any = []
  xps = []



  cardColor: string = '#232837';

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  legendPosition = 'below';

  barChartcustomColors = 
  [
    { name: "", value: '#f94555' },
    { name: "", value: '#f2636b' },
    { name: "", value: '#672e37' },
    { name: "", value: '#7e7c7d' },
    { name: "", value: '#ce9e9c' },
    { name: "", value: '#3c3a4c' },
  ]


  below = LegendPosition.Below

  constructor(
    public graficosService: GraficosService
  ) {

  }

  ngOnInit(): void {
  this.filtrarArmas();
  this.filtrarRewards();
  this.filtrarAgentes();
  this.filtrarXps();
  }



  filtrarArmas(){
    this.graficosService.getCountSkin((this.selecaoArmasControl.value)?.toString()).subscribe((result)=>{
      this.armas = this.graficosService.tranformarDados(result, 'weapon', 'skins')});
  }
  
  filtrarRewards(){
    this.graficosService.getCountReawald((this.rewardsControl.value)?.toString()).subscribe((result)=>{
      this.rewards = this.graficosService.tranformarDados(result, 'type', 'gived')});   
  }
  filtrarAgentes(){
    this.graficosService.getCountAgents((this.agentsControl.value)?.toString()).subscribe((result)=>{
      this.agents = this.graficosService.tranformarDados(result, 'role', 'agents')});   
  }

  filtrarXps(){
    this.graficosService.getCountXps((this.xpsControl.value)?.toString()).subscribe((result)=>{
      this.xps = this.graficosService.tranformarDados(result, 'type', 'xp')});   
  }
}
