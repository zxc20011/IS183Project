import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        id: 1,
        first_name: 'Zhihong',
        last_name: 'Liang',
        email: 'ZLiang@coolio.com'
      },
      {
        id: 2,
        first_name: 'Spider',
        last_name: 'Man',
        email: 'spider@coolio.com'
      },
      {
        id: 3,
        first_name: 'Iron',
        last_name: 'Man',
        email: 'iron@coolio.com'
      }
    ];
  }
  delete(e) {
    console.log('from delete e: ', e);
    this.contacts.splice(e, 1);
  }
  addRow() {
    this.contacts.push({
      id: 1,
      first_name: 'Zhihong',
      last_name: 'Liang',
      email: 'ZLiang@coolio.com'
    });
  }
  save(row) {
    console.log('from save row: ', row);
  }
}
