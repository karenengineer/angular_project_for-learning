import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public Ingredients: Ingredient[] = [
    new Ingredient('apples', 7),
    new Ingredient('oranges', 9),
    new Ingredient('bananas', 9)
  ]
  constructor() { }

  ngOnInit() {
  }

}
