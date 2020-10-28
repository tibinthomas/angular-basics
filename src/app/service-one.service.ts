import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  constructor() { }
  backUp;

  private _val = new BehaviorSubject(0);
  val$ = this._val.pipe(
    tap(x =>  this.backUp = x),
    filter(x => x >=5 ),
  )

  handleChangeInInput(data) {
    this._val.next(data);
  }

}
