import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from "../shared/ingredient.model"
import { RequestsService } from '../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  recipes: Recipe[]
  shoppings: Ingredient[]

  constructor(private requestsService: RequestsService, private router: Router) { }

  ngOnInit() {
  }

  onUpdateData() {
    
    this.requestsService.updateData().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onFetchData() {
    this.requestsService.fetchData()
  }

}
