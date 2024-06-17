import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  public getNoticias(): Observable<any> { //EL OBSERVABLE NORMALMENTE SE USA CUANDO LLEGA LA API
    const httOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '485a94b0efmsh5e569bed2b827f6p1fad95jsnf0e5c7762783',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    }
    return this.http.get('https://livescore6.p.rapidapi.com/news/v2/list',httOptions)//implemento los headers, estan en httpOptions

  }




}
