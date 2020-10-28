import { Component } from '@angular/core';
import { ServiceOneService } from './service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  // date = new Date();

  constructor(private service: ServiceOneService) {
  }

  ngOnInit() {
    console.log('parent created')

    this.service.handleChangeInInput(this.val);
  }

  dataFromChild;

  forch2 ='child2';
  val = 1000;
  // set

  handleClickEvent(data) {
    this.dataFromChild = data;
    this.service.handleChangeInInput(this.val);
    console.log(this.val);
  }

  handlechangeintextbox(){
    this.service.handleChangeInInput(this.val);
  }
}
