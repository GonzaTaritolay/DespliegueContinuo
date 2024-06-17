import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  
  apiKey:string ="8995d7e6f8d620defdb9665913762694";


  constructor(private http: HttpClient) { }
  public getPaise(): Observable<any> { //EL OBSERVABLE NORMALMENTE SE USA CUANDO LLEGA LA API
    const httOptions={
      headers: new HttpHeaders({
        "X-CSCAPI-KEY": "RWM0S051czFRcUtJaTJrVGxrVmprQnZtSU50MUFWZUlYYkhxUTMzeg=="
      })
    }
    return this.http.get('https://api.countrystatecity.in/v1/countries',httOptions)//implemento los headers, estan en httpOptions

  }
  public getEstados(pais:string): Observable<any> {
    const httOptions={
      headers: new HttpHeaders({
        "X-CSCAPI-KEY": "RWM0S051czFRcUtJaTJrVGxrVmprQnZtSU50MUFWZUlYYkhxUTMzeg=="
      })
    }
    return this.http.get('https://api.countrystatecity.in/v1/countries/'+pais+'/states',httOptions)//implemento los headers, estan en httpOptions
  }

  public getLocalidades(pais:string,estado:string): Observable<any> {
    const httOptions={
      headers: new HttpHeaders({
        "X-CSCAPI-KEY": "RWM0S051czFRcUtJaTJrVGxrVmprQnZtSU50MUFWZUlYYkhxUTMzeg=="
      })
    }
    return this.http.get('https://api.countrystatecity.in/v1/countries/'+pais+'/states/'+estado+'/cities',httOptions)//implemento los headers, estan en httpOptions
  }


  public getClima(localidad:string, pais:string): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+localidad+','+pais+'&lang=es&units=metric&appid='+this.apiKey)
  }



}
 
