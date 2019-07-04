import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class statesService {

  baseUrl:string = "https://servicodados.ibge.gov.br/api/v1/localidades";

  constructor(private httpClient : HttpClient) { }

  getStates() {
   
    return this.httpClient.get(this.baseUrl + '/estados');
  }
}
