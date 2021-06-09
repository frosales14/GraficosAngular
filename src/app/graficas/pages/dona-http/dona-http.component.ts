import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 200]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public color: Color[] = [
    {
      backgroundColor: [
        '#65F7F5',
        '#58D6B0',
        '#6DEDA2',
        '#58D669',
        '#80F765',
      ]
    }
  ]


  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
    // this.graficasService.getDatosRedesSociales()
    //     .subscribe( data => {
    //       const key = Object.keys( data );
    //       const values = Object.values( data );

    //       this.doughnutChartLabels = key;
    //       this.doughnutChartData.push( values );
    //     })

    this.graficasService.getDataTransformada()
        .subscribe( ({labels, values}) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push( values );
        })

  }

}
