import { Injectable } from '@angular/core';
import * as Rx from "rxjs";

@Injectable(

)
export class DataService {

  private meals = new Rx.BehaviorSubject(['The initial meal', 'Another meal']);
  meal = this.meals.asObservable();

  constructor() { }

  changeMeal(meal) {
    this.meals.next(meal);
  }
}
