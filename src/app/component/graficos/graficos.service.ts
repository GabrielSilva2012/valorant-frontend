import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(
    private http: HttpClient
  ) { }

  tranformarDados(dados: any, name: string, value: string){
    const result = dados.map((item:any) => {
      return {
        name: item[name],
        value: item[value]
      };   
    });
    return result
  }

  getCountSkin(filtros?: string){
     const arr = filtros?.split(',');
    let params = new HttpParams()
    if(arr){ 
      arr.forEach(item =>{
        params = params.append('displayNames', item);
      })
      }
      return this.http.get('http://localhost:3000/weapons/count/skins', {params: params});
    }

  getCountReawald(filtros?: string){
    const arr = filtros?.split(',');
    let params = new HttpParams()
    if(arr){ 
      arr.forEach(item =>{
        params = params.append('rewardTypes', item);
      })
      }
      return this.http.get('http://localhost:3000/contracts/rewards/count/type', {params: params});
    }

  getCountAgents(filtros?: string){
    const arr = filtros?.split(',');
    let params = new HttpParams()
    if(arr){ 
      arr.forEach(item =>{
        params = params.append('rewardTypes', item);
      })
      }
      return this.http.get('http://localhost:3000/agents/roles/count', {params: params});
    }

  getCountXps(filtros?: string){
      if(filtros){ 
        return this.http.get('http://localhost:3000/contracts/rewards/sum/xp', {params: new HttpParams().append('contractType', filtros)});
      }else{
        return this.http.get('http://localhost:3000/contracts/rewards/sum/xp?contractType=Agent');
      }
       
      }
    
  }