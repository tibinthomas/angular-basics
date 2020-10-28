import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from 'src/app/service-one.service';

@Component({
  selector: 'app-other-c-one',
  templateUrl: './other-c-one.component.html',
  styleUrls: ['./other-c-one.component.scss']
})
export class OtherCOneComponent implements OnInit {

  constructor(public service: ServiceOneService) { }
otherval = 5;
  ngOnInit(): void {
    this.service.val.subscribe(x=>this.otherval=x)
  }

}
