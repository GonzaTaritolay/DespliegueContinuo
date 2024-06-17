import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AutosService } from '../../services/autos.service'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './page-b.component.html',
  styleUrl: './page-b.component.css'
})
export class PageBComponent {
autos:any;
modelos:any []=[];


BuscarByModelo:any;
BuscarByModeloCant:number=0
autoModal:string="";
  constructor(private AutosService: AutosService){
    this.ObtenerAutos();
    this.ObtenerModelo();
  }
  ObtenerAutos(){
    this.AutosService.getAutos().subscribe(
     result=>{
       this.autos=result.data;
       //console.log(this.autos);
     },
     error=>{
       console.log(error);
     }
   )
  }


  ObtenerModelo(){
    this.AutosService.getByAutos().subscribe(
      result=>{
        this.modelos=result.data;
        //console.log(this.modelos);
      },
      error=>{
        console.log(error);
      }
    )
  }

  ObtenerUnModelo(id:number){
    this.BuscarByModelo = this.modelos.filter(model => model.make_id==id)
    this.BuscarByModeloCant=this.BuscarByModelo.length

  }


  
  
  GuardarAuto(modelo:string){
    this.autoModal=modelo;
    //console.log(this.autoModal);
  }
  
}
