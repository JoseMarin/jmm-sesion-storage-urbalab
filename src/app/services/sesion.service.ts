import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  storeData(name:string,ape:string){
    localStorage.setItem('name', name);
    localStorage.setItem('apellido', ape);
  }

  getData(){
    let name = localStorage.getItem('name');
    let ape = localStorage.getItem('apellido');
    return [name,ape];
  }

  getName(){
    return localStorage.getItem('name');
  }

  getApe(){
    return localStorage.getItem('apellido');
  }

  deleData(){
    localStorage.clear();
  }


}
