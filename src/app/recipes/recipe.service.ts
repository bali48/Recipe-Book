import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService{
  public SelectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Chicken Sajji', 'What a Sajji', 'data:image/jpeg;base64,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',[
        new Ingredient('Chicken',15),
        new Ingredient('Rice',6)
    ]),
    new Recipe('Salid', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Chicken',15),
      new Ingredient('Rice',6)
    ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  viewRecipeDetail(){

  }
}
