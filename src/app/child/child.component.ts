import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('rrr') trial: Object = {x:'x'};

  @Output() clicked = new EventEmitter();

  ngOnInit(): void {
  }

}
