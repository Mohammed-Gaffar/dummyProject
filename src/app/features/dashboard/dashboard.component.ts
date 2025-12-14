import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('barChart') barRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('areaChart') areaRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('donutChart') donutRef!: ElementRef<HTMLCanvasElement>;

  private barChart?: Chart;
  private areaChart?: Chart;
  private donutChart?: Chart;

  ngAfterViewInit(): void {
    this.initBarChart();
    this.initAreaChart();
    this.initDonutChart();
  }

  ngOnDestroy(): void {
    this.barChart?.destroy();
    this.areaChart?.destroy();
    this.donutChart?.destroy();
  }

  private initBarChart() {
    const ctx = this.barRef.nativeElement.getContext('2d')!;
    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: '2019',
            data: [20, 30, 25, 35, 28, 32, 99, 30, 25],
            backgroundColor: '#0b63a6',
          },
          {
            label: '2020',
            data: [15, 25, 20, 30, 22, 26, 35, 28, 20],
            backgroundColor: '#ff9f1a',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          x: { stacked: false, grid: { display: false } },
          y: { beginAtZero: true, ticks: { stepSize: 10 } },
        },
      },
    });
  }

  private initAreaChart() {
    const ctx = this.areaRef.nativeElement.getContext('2d')!;
    this.areaChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [
          {
            label: 'Lorem',
            data: [10, 18, 12, 25, 18, 22, 28, 20, 16],
            fill: true,
            backgroundColor: 'rgba(255,159,26,0.15)',
            borderColor: '#ff9f1a',
            tension: 0.3,
            pointRadius: 0,
          },
          {
            label: 'Dolor',
            data: [8, 14, 10, 20, 15, 18, 22, 16, 12],
            fill: true,
            backgroundColor: 'rgba(11,99,166,0.12)',
            borderColor: '#0b63a6',
            tension: 0.3,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: { x: { grid: { display: false } }, y: { display: false } },
      },
    });
  }

  private initDonutChart() {
    const ctx = this.donutRef.nativeElement.getContext('2d')!;
    this.donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            data: [45, 55],
            backgroundColor: ['#ff9f1a', '#e9ecef'],
            hoverBackgroundColor: ['#ff9f1a', '#e9ecef'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
  }
}
