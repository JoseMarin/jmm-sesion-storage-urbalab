import { Component, OnInit } from '@angular/core';
import { SesionService } from '../services/sesion.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  nombre: string | null = '';
  apellido: string | null = '';
  constructor(private Sesion: SesionService) {
    this.getData();
   }

  ngOnInit(): void {
  }

  getData(){
    this.nombre = localStorage.getItem('name');
    this.apellido = localStorage.getItem('apellido');
  }



}
