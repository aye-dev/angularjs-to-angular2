import './../app.css';
import { Component } from "@angular/core";

@Component({
  selector: 'ng2-app',
  template: `
    <p>ng2 app</p>
    <div class="ng-view"></div>
  `
})
export class AppComponent {}