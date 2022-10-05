import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());//newDate is just a string always, deemed as being greater than 5.
  }
}
