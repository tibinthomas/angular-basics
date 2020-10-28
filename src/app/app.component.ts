import { Component } from '@angular/core';
import { ServiceOneService } from './service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor(private service: ServiceOneService) {
  }

  ngOnInit() {
    console.log('parent created')

    this.service.val.next(6);
  }

  dataFromChild;

  forch2 ='child2';
  val = 1000;
  // set

  handleClickEvent(data) {
    this.dataFromChild = data;
    this.service.val.next(data);
    console.log(this.val);
  }

  handlechangeintextbox(){
    this.service.val.next(this.val);
  }
}
