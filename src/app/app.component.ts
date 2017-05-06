import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  years: Array<Number> = [2012, 2013, 2014, 2015];
  students = [
    {
      name: 'Paul',
      results: [90, 77, 94, 30]
    },
    {
      name: 'Katie',
      results: [90, 90, 22, 11]
    },
    {
      name: 'Dave',
      results: [50, 47, 24, 90]
    },
    {
      name: 'Sarah',
      results: [10, 57, 64, 70]
    },
  ];

  chartItemClicked(event){
    console.log(event);
  }
}
