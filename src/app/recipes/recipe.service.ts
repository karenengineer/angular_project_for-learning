import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 3.2),
        new Ingredient('Fries', 4.5)
      ]),
    new Recipe(
      'Another Test Recipe', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Buns', 3.2),
        new Ingredient('Meat', 1.5)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientsToSHoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
