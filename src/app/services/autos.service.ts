import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private http: HttpClient) { }

  public getAutos(): Observable<any> { //EL OBSERVABLE NORMALMENTE SE USA CUANDO LLEGA LA API  
    const httOptions={
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '485a94b0efmsh5e569bed2b827f6p1fad95jsnf0e5c7762783',
		  'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    })
  }
    return this.http.get('https://car-api2.p.rapidapi.com/api/makes',httOptions)//implemento los headers, estan en httpOptions

}

public getByAutos(): Observable<any> { //EL OBSERVABLE NORMALMENTE SE USA CUANDO LLEGA LA API
  const httOptions={
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '485a94b0efmsh5e569bed2b827f6p1fad95jsnf0e5c7762783',
      'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    }),
    params: new HttpParams()
          .append('year', 2020)
  }
  return this.http.get('https://car-api2.p.rapidapi.com/api/models?year=2020',httOptions)//implemento los headers, estan en httpOptions

}



}
