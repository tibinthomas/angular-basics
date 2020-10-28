import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  dataFromChild;

  forch2 ='child2';
  // set

  handleClickEvent(data) {
    this.dataFromChild = data;
  }
}
