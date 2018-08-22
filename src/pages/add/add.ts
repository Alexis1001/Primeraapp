import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nombre:string;
  ApellidoP:string;
  ApellidoM:string;
  telefono:string;
  direccion:string;
  key1:string="username1";
  key2:string="username2";
  key3:string="username3";
  key4:string="username4";
  key5:string="username5";


  constructor(public navCtrl: NavController,private storage: Storage) {

    //, public navParams: NavParams,private storage: Storage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  Agregar(){
   this.storage.set(this.key1,this.nombre);
   this.storage.set(this.key2,this.ApellidoP);
   this.storage.set(this.key3,this.ApellidoM);
   this.storage.set(this.key4,this.telefono);
   this.storage.set(this.key5,this.direccion);
  }

Verdatos(){
  this.storage.get(this.key1).then((val) => {
    console.log('dato : ',val);

  });

  this.storage.get(this.key2).then((val) => {
    console.log('dato : ',val);

  });

  this.storage.get(this.key3).then((val) => {
    console.log('dato : ',val);

  });

  this.storage.get(this.key4).then((val) => {
    console.log('dato : ',val);

  });


  this.storage.get(this.key5).then((val) => {
    console.log('dato : ',val);

  });

}



}

class persona{

nombre:string;
ApellidoP:string;
ApellidoM:string;
telefono:string;
direccion:string;

constructor(nombre:string,ApellidoP:string,ApellidoM:string,telefono:string,direccion:string){
this.nombre=nombre;
this.ApellidoP=ApellidoP;
this.ApellidoM=ApellidoM;
this.telefono=telefono;
this.direccion=direccion;
 }

 get nombren():string{
     return this.nombre;
 }

 get apellidop():string{
  return this.ApellidoP;
}

get apellidom():string{
return this.ApellidoM;
  }

  get telefonop():string{
    return this.ApellidoM;
      }

  get direccionp():string{
      return this.ApellidoM;
    }



}

let per=new persona("alexis","perez","gomez","9611529996","calle chipas");
console.log(per.nombre+" "+per.apellidop+" "+per.ApellidoM+" "+per.telefono+" "+per.direccion);

