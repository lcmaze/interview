import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  chart;

  constructor() { }

  ngOnInit(): void {
    this.newChart();
    // console.log(this.chart.config.options.scales.x.min);
    // console.log(this.chart.config.options.scales.x.max);
  }

  newChart() {
    this.chart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Products Sold',
          data: [12, 19, 3, 5, 2, 24],
          borderWidth: 2,
          backgroundColor: '#a3a0fb20',
          borderColor: '#a3a0fb',
          fill: true,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        },
        {
          label: 'Total Views',
          data: [19, 3, 5, 2, 3, 12],
          borderWidth: 2,
          backgroundColor: '#55d8fe20',
          borderColor: '#55d8fe',
          fill: true,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            },
            max: 5,
            min: 0
          },
          y: {
            display: true,
            title: {
              display: false,
              text: 'Value'
            },
            suggestedMin: 0,
            suggestedMax: 16
          }
        }
      }
    });
  }

}
