import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-a.component.html',
  styleUrl: './page-a.component.css'
})
export class PageAComponent {
noticias:any;
constructor(private NoticiaService: NoticiaService){
  this.ObtenerNocitias();
}
 ObtenerNocitias(){
   this.NoticiaService.getNoticias().subscribe(
    result=>{
      this.noticias=result.homepageArticles[0].articles;
      console.log(this.noticias);
    },
    error=>{
      console.log(error);
    }
  )
 }

}
