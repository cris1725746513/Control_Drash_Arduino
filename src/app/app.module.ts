import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './component/home/home.component';
import { FirbeaseComponent } from './component/firbease/firbease.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { GoogleMapsModule } from '@angular/google-maps';

import { NgChartsModule } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { GraficasComponent } from './component/graficas/graficas.component';

registerLocaleData(localeEs, "es");


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirbeaseComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTableModule ,
    MatPaginatorModule ,
    MatInputModule ,
    MatDatepickerModule ,
    MatNativeDateModule,
    MatOptionModule ,
    MatSelectModule ,
   MatDialogModule,
    MatButtonModule ,
   MatAutocompleteModule,
   MatTooltipModule,
   MatTreeModule,
   MatProgressBarModule,
   MatCheckboxModule,
    MatSlideToggleModule ,
    MatMenuModule,
    MatExpansionModule
    ,MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    GoogleMapsModule, ReactiveFormsModule,
    ColorPickerModule,
    NgChartsModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: LOCALE_ID, useValue: "es" },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}},],
  bootstrap: [AppComponent]
})
export class AppModule { }

