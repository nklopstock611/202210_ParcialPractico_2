import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl);
  }
}
