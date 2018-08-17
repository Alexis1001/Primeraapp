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
  direcion:"calle chiapas",
  telefono:"9611529996",

},
/*{
  nombre:"juan",
  ApellidoP:"hernandez",
  ApellidoM:"gomez",
  direcion:"calle chiapas",
  telefono:"9611529996",
}*/
  ]; 



    constructor(public navCtrl: NavController) {
 
  }

  add(){
    this.navCtrl.push(AddPage);
  }


}
 