import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'clr-charts',
  templateUrl: './clr-charts.component.html',
  styleUrls: ['./clr-charts.component.css']
})
export class ClrChartsComponent implements OnInit {

  constructor() { }

 
  @Input() type: string;
  @Input() data: any;
  @Input() options: any;
  LineChart: any;

  ngOnInit() {
    // Line chart:
    let self = this;
    // tslint:disable-next-line: no-unused-expression
    setTimeout(function() { console.log(self.type);  new Chart(self.type, {
      type: self.type,
      data: self.data,
      options: self.options
    }); }, 100);
    
}
}
