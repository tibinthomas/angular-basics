import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor() { }

  val = new BehaviorSubject(0);

}
