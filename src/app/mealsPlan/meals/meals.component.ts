import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  animations: [
    trigger('meals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))
        ]), {optional: true}),

      ])
    ])
  ]
})
export class MealsComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an item';
  mealText: string = 'My first meal';
  meals: Array<string> = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.meal.subscribe(res => this.meals = res);
    this.itemCount = this.meals.length;
    this._data.changeMeal(this.meals);
  }

  addItem() {
    this.meals.push(this.mealText);
    this.mealText = '';
    this.itemCount = this.meals.length;
    this._data.changeMeal(this.meals);
  }

  removeItem(i) {
    this.meals.splice(i, 1);
    this._data.changeMeal(this.meals);
    this.itemCount = this.meals.length;
  }

}
