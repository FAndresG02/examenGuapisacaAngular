import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Operadora } from '../domain/operadora';

@Injectable({
  providedIn: 'root'
})
export class OperadorasService {

  constructor(private http: HttpClient) { }

  getOperadoras() {
    let url = environment.WS_PATH+ "/operadoras/list";
    return this.http.get<any>(url);
  }

  getOperadorasById(id: number) {
    let url = environment.WS_PATH + "/operadoras?codigo="+id;
    return this.http.get<any>(url);
  }

  saveOperadora(operadora: Operadora) {
    let url = environment.WS_PATH + "/operadoras";
    return this.http.post<any>(url, operadora);
  }
}
