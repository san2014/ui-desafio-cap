import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Promise<any[]> {
 
    return new Promise( (resolve, reject) => { 
      this.http.get<any[]>(`${URL_API}cliente/`)
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
