import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryDTO, WeaponFilterDTO } from './Home/filtro.dto';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( 
    private http: HttpClient
  ) { }

  filtrarWeaponPaginated(data: QueryDTO){
    const url = 'http://localhost:3000/weapons/paginated';
    const headers = new HttpHeaders({
  'Accept': '*/*',
  'Content-Type': 'application/json'
    });
  return this.http.post(url, data, { headers })
  }

  filtrarSkinPaginated(data: WeaponFilterDTO){
    const url = 'http://localhost:3000/weapons/skins/paginated';
    const headers = new HttpHeaders({
  'Accept': '*/*',
  'Content-Type': 'application/json'
    });
  return this.http.post(url, data, { headers })
  }
}
