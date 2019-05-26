import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredinets: Ingredient[] = [
    new Ingredient('Apples', 77),
    new Ingredient('Peach', 97)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredinets.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredinets.push(ingredient);
    this.ingredientsChanged.emit(this.ingredinets.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredinets.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredinets.slice())
  }
}
