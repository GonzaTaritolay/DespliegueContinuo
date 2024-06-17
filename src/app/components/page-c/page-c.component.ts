import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-page-c',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './page-c.component.html',
  styleUrl: './page-c.component.css'
})
export class PageCComponent {
  paises:   any []= [];
  estados:  any []= [];
  ciudades:   any []= [];
  ResultadoClima: any;

  busquedaPaisIso2:string="";
  busquedaEstadoIso2:string="";
  localidadName!:string;
  estadoName!:string;
  
/**************VARIABLE DEL CLIMA************/

 temperatura:any;
 viento:any;
 lugar:any;
 IdImg:any;
 descripcion:any;
horas:any;
  constructor( private climaService:ClimaService ) { 
    this.obtenerPaises();
    this.Tiempo();
  }
 
  obtenerPaises(){
    this.climaService.getPaise().subscribe(
      data => {
        this.paises= data; //ALMACENO TODO LOS PAISES DE LA API
        console.log(data)    
      },
      error => {
        console.log(error);
      }
    );
  }

  
  ObtenerIsoPais(NombrePais:any){
      const paisName= NombrePais.target.value; //QUEDA GUARDADO EL NOMBRE DEL PAIS
      const busqueda=this.paises.find(a => a.name == paisName);
      this.busquedaPaisIso2=busqueda.iso2 //QUEDA GUARDADO EL NOMBRE ISO DEL PAIS
      this.ObtenerEstados(this.busquedaPaisIso2);
  }



  ObtenerEstados(IsoPais:string){
    this.climaService.getEstados(IsoPais).subscribe(
      data => {
        this.estados= data;  //ALMACENO TODO LOS ESTADOS DE LA API
        console.log(this.estados)   
      },
      error => {
        console.log(error);
      }
    );
  }


  ObtenerIsoEstado(NombreEstado:any){
    this.estadoName= NombreEstado.target.value; //QUEDA GUARDADO EL NOMBRE DEL ESTADO 
    const busqueda=this.estados.find(a => a.name == this.estadoName);
    this.busquedaEstadoIso2=busqueda.iso2 //QUEDA GUARDADO EL NOMBRE ISO DEL ESTADO
    this.ObtenerLocalidades(this.busquedaPaisIso2,this.busquedaEstadoIso2);
    
  }


  ObtenerLocalidades (IsoPais:string,IsoEstado:string){
    this.climaService.getLocalidades(IsoPais,IsoEstado).subscribe(
      data => {
        this.ciudades= data;  //ALMACENO TODAS LAS LOCALIDADES/CIUDADES DE LA API
        this.Verificar(this.ciudades.length)
        console.log(this.ciudades.length)    
      },
      error => {
        console.log(error);
      }
    );
    
  }


  ObtenerClima(NombreLocalidad:any){
    this.localidadName= NombreLocalidad.target.value; //QUEDA GUARDADO EL NOMBRE DEL ESTADO 
    this.clima(this.localidadName,this.busquedaPaisIso2);
  }

  clima(localidad:string,pais:string){
    this.climaService.getClima(localidad,pais).subscribe(
      data => {
        this.ResultadoClima=data;
        const temperaturaLarga=this.ResultadoClima.main.temp;
        this.temperatura=Math.round(temperaturaLarga);
        this.viento=this.ResultadoClima.wind.speed;
        this.lugar=this.ResultadoClima.name;
        // const IdImg=this.ResultadoClima.weather[0].icon;
        this.IdImg=data.weather[0].main;
        this.descripcion=this.ResultadoClima.weather[0].description
        console.log(this.ResultadoClima)   
      },
      error => {
        console.log(error);
      }
    );
  }
   
  Verificar(cantidad:number){
    
    if(cantidad===0){
      //console.log("entro a la funcion verificar!!!!!!!!!")
      this.clima(this.estadoName,this.busquedaPaisIso2)
      }
  }
  
  Tiempo(){
    const now = new Date();
    this.horas = now.getHours();
    console.log(this.horas)
  }






}