import { Component } from '@angular/core';

import { identity } from 'rambda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-issue';

  constructor() {
    console.log(identity);
  }
}
