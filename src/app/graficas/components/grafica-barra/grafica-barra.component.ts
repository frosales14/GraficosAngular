import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  
  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Serie A', backgroundColor: '#007A70' , hoverBackgroundColor: "#257A73"},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Serie B', backgroundColor:  '#4BFBEC', hoverBackgroundColor: "#00C7B6" }
  ];
  constructor() { }

  ngOnInit(): void {
    (this.horizontal)
      ? this.barChartType = "horizontalBar"
      : this.barChartType = "bar";
  }

}
