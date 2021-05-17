import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  chart;

  constructor() { }

  ngOnInit(): void {
    this.newChart();
  }

  newChart() {
    this.chart = new Chart("myChart2", {
      type: 'doughnut',
      data: {
        labels: [
          'France',
          'Italy',
          'France',
          'Italy'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [4260, 3970, 4260, 3970],
          backgroundColor: [
            '#55d8fe',
            '#ff8373',
            '#ffda83',
            '#a3a0fb'
          ],
          hoverOffset: 0
        }]
      },
      options: {
        maintainAspectRatio: false,
      }
    });
  }

}
