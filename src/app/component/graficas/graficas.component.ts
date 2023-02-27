import { Component, OnInit ,Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  @Input() horas!: any[];
  @Input() niveles!: any[];

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData!: ChartConfiguration<'bar'>['data'];

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {


  }

  ngOnInit() {
    this.barChartData= {
      labels:  this.horas,
      datasets: [
        { data: this.niveles , label: 'Control de nivel por Horas' },

      ]
    };

  }




}
