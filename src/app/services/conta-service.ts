import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  public obter(id: number): Promise<any[]> {
 
    return new Promise( (resolve, reject) => { 
      this.http.get<any[]>(`${URL_API}conta/${id}`)
      .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })        
    });

  }

  public saque(conta: any, valor: number): Promise<any[]> {
 
    return new Promise( (resolve, reject) => { 
      this.http.put<any[]>(`${URL_API}conta/saque/${conta.id}/${valor}`, conta)
      .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })        
    });

  }
  
  public deposito(conta: any, valor: number): Promise<any[]> {
 
    return new Promise( (resolve, reject) => { 
      this.http.put<any[]>(`${URL_API}conta/deposito/${conta.id}/${valor}`, conta)
      .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })        
    });

  }  

}
