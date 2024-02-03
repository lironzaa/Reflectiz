import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: [ './graph.component.scss' ]
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() labels: string[] = [];
  @Input() data: any = {};
  @Input() graphLabel: string = '';
  @Input() type: 'bar' | 'pie' = 'bar';

  // Bar Config
  public barChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [ DataLabelsPlugin ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };

  // Pie Config
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [ { data: [] } ],
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DataLabelsPlugin ];

  ngOnInit(): void {
    switch (this.type) {
      case "bar":
        this.initBarConfig();
        break;
      case "pie":
        this.initPieConfig();
        break;
    }
  }

  initBarConfig(): void {
    this.barChartData.labels = this.labels;
    let index = 0;
    for (let item in this.data) {
      this.barChartData.datasets.push({ data: [], label: '' });
      this.barChartData.datasets[index].data = Object.values(this.data[item]);
      this.barChartData.datasets[index].label = item;
      index++;
    }
  }

  initPieConfig(): void {
    this.pieChartData.labels = this.labels;
    this.pieChartData.datasets[0].data = Object.values(this.data);
  }
}
