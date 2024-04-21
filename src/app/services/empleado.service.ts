import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

const baseUrlEmpleado  = AppSettings.API_ENDPOINT + "/empleado"

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
registraEmpleado(obj:Empleado): Observable<any>{
  return this.http.post(baseUrlEmpleado, obj)
}

}
