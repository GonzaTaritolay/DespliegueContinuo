import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  
  constructor( private http:  HttpClient) { }
//Segunda key si hace falta   f7b76d61cemsh700f3175250c6a2p15d971jsnf0adbb9e0803
  public getLanguage(): Observable<any> { //EL OBSERVABLE NORMALMENTE SE USA CUANDO LLEGA LA API
    const httOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'f7b76d61cemsh700f3175250c6a2p15d971jsnf0adbb9e0803',
		    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    }
    return this.http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=es',httOptions)//implemento los headers, estan en httpOptions

  }
  public Detectar(text:string){
    const httpOptions ={
      headers: new HttpHeaders({
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'f7b76d61cemsh700f3175250c6a2p15d971jsnf0adbb9e0803',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          }),
    }
    const body = new HttpParams()
    .set('q',text)
    return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', body, httpOptions);
  }
    
public Translate(text:string ,target:string , source: string  ){
  const httpOptions ={
    headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'f7b76d61cemsh700f3175250c6a2p15d971jsnf0adbb9e0803',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }),
  }
  const body = new HttpParams()
  .set('q',text)
  .set('target',target)
  .set('source',source);
  return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', body, httpOptions);
}
  
}
