import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 200]
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

}
