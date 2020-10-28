import { Component, Input, OnInit } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit {

  constructor(public service: ServiceOneService) {
  }

  @Input () var1 ='default'
  val;

  ngOnInit(): void {
    console.log('chils created')
    this.service.val$.subscribe(x => {
      console.log(x);
      this.val = x;
      console.log(x);
    })
  }

}
