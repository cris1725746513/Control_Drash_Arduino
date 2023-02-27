import { Component, OnInit ,ViewChild} from '@angular/core';
import { FirestoreService } from '../../service/fire-store.service';
import { catchError, map } from 'rxjs/operators';
import {MatAccordion} from '@angular/material/expansion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-firbease',
  templateUrl: './firbease.component.html',
  styleUrls: ['./firbease.component.css']
})
export class FirbeaseComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  containers?: any[];
  horas!: any[];
  niveles!: any[];
  ultimoControl !: String;
  apiLoaded!: Observable<boolean>;
  currentTutorial?: any;
  currentIndex = -1;
  title = '';
  center : any;
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions!: google.maps.LatLngLiteral[] ;
  verMapa:boolean=false;
  constructor(private firestoreService: FirestoreService, private httpClient: HttpClient
  ) {



  }
  ngOnInit() {
    this.retrieveTutorials();
}
refreshList(): void {
  this.currentTutorial = undefined;
  this.currentIndex = -1;
  this.retrieveTutorials();
}

retrieveTutorials(): void {
  this.firestoreService.getAll().snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )
    )
  ).subscribe(data => {

    this.containers = data;
    var contenedor = this.containers![0]
    console.log(contenedor.latitud)
    this.center = {lat: contenedor.latitud, lng: contenedor.longitud};
    this.markerPositions= [this.center];

    this.historial()
  });
}

setActiveTutorial(tutorial: any, index: number): void {
  this.currentTutorial = tutorial;
  this.currentIndex = index;
}

removeAllTutorials(): void {
  this.firestoreService.deleteAll()
    .then(() => this.refreshList())
    .catch(err => console.log(err));
}

changeStateNewTask(){
  this.verMapa=!this.verMapa;
 }

 historial(){

    var contenedor = this.containers![0]
    console.log(contenedor.dateTop.fecha1);

//contenedor.dateTop.fecha1
this.horas=[this.retunDatefrondLong(contenedor.dateTop.fecha1)
  ,this.retunDatefrondLong(contenedor.dateTop.fecha2)
  ,this.retunDatefrondLong(contenedor.dateTop.fecha3)
  ,this.retunDatefrondLong(contenedor.dateTop.fecha4)]

  this.ultimoControl = new Date(contenedor.dateTop.fecha4).toUTCString();
this.niveles =[contenedor.dateTop.nivel1
,contenedor.dateTop.nivel2
,contenedor.dateTop.nivel3
,contenedor.dateTop.nivel4]
 }


 retunDatefrondLong(miliseg:any):String{
  var h =new Date(miliseg).toDateString();
  var m =new Date(miliseg).getMinutes();
  var s =new Date(miliseg).getSeconds();
  return h;
}

 }

