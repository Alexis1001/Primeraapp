import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
 nombre:string;
 telefono:string;
 ApellidoP:string;
 ApellidoM:string;
 direccion:string;



  lista : Array <any>=[
{
  nombre:"alexis",
  ApellidoP:"perez",
  ApellidoM:"gomez",
  direcion:"calle guerrero",
  telefono:"96112345",

},
{
  nombre:"juan",
  ApellidoP:"hernandez",
  ApellidoM:"gomez",
  direcion:"calle chiapas",
  telefono:"9611529996",
},
{  
  nombre:"francisco",
  ApellidoP:"jimenez",
  ApellidoM:"jimenez",
  direcion:"calle oaxaca",
  telefono:"961489567",
   },
  
  {
    nombre:"jaime",
    ApellidoP:"francisco",
    ApellidoM:"de la cruz",
    direcion:"calle sinaloa",
    telefono:"961489961",
},
{
  nombre:"ector",
  ApellidoP:"herrera",
  ApellidoM:"herrera",
  direcion:"calle chanka",
  telefono:"961489961",
}

  ]; 
    constructor(public navCtrl: NavController) {
 
  }

  add(){
    this.navCtrl.push(AddPage);
  }

//
}
 