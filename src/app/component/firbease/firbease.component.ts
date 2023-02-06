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
  apiLoaded!: Observable<boolean>;
  currentTutorial?: any;
  currentIndex = -1;
  title = '';
  center = {lat: -1.03578, lng: -79.453227};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [this.center];
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

    this.numeroDias()
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

 numeroDias(){
  console.log(this.containers)
  var fechaInicio = new Date('02-01-2023').getTime();
var fechaFin    = new Date('02-03-2023').getTime();
var diff = fechaFin - fechaInicio;

console.log(diff/(1000*60*60*24) );
 }

 }




 /*
 [class.active]="i == currentIndex"
          (click)="setActiveTutorial(container, i)" >
 */
