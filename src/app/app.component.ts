import { Component } from '@angular/core';
import { SesionService } from './services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jmm-sesion-storage-urbalab';

  constructor(private Sesion: SesionService){}

  nombre:string = '';
  apellido:string = '';

  save(){
    this.Sesion.storeData(this.nombre, this.apellido);
  }

  delLocal(){
    this.Sesion.deleData();
  }

}
