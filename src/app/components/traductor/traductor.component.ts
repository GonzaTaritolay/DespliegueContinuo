import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {
   target:string="";
   texto:string="";
   detectarIdioma: string="";
   textoTraducido:string="";
   cantidadText:number=this.textoTraducido.length
   lenguajes: any[]=[];
   hola:string="holasss";
   
  constructor(private translateService: TranslateService){
    this.obtenerLenguajes();
  }

  obtenerLenguajes(){
    this.translateService.getLanguage().subscribe(
      resultado=>{
        this.lenguajes=resultado.data.languages;
        console.log(this.lenguajes);
      },
      error=>{
        console.log(error);
      }
    )
  }
Detectar(){
  this.translateService.Detectar(this.texto).subscribe(
    (result:any)=>{
      this.detectarIdioma=result.data.detections[0][0].language
      console.log(this.detectarIdioma);
    },
    error=>{
      console.log(error);
    }
  )
}
  ObtenerSource(){
    const busquedaSource=this.lenguajes.find(a => a.name == this.target);
    const source=busquedaSource.language
    console.log(busquedaSource)
    console.log(source)
    this.traducir(source)
  }

  traducir(source:string){
    console.log(this.detectarIdioma,source,this.texto)
    this.translateService.Translate(this.texto,source,this.detectarIdioma).subscribe(
      (result:any)=>{
        this.textoTraducido=result.data.translations[0].translatedText;
        this.cantidadText=this.textoTraducido.length;
        console.log(this.textoTraducido);
      },
      error=>{
        console.log(error);
      }
    )
  }

 

}
