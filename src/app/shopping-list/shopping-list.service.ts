import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  public itemnotifier = new EventEmitter<Ingredient[]>();
  constructor() { }

  getIngredientList(){
    return this.ingredients.slice();
  }


  addIngredient(item: Ingredient){
    this.ingredients.push(item);
    this.itemnotifier.emit(this.ingredients.slice());
  }

  addRecipeIngredientList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.itemnotifier.emit(this.ingredients.slice());
  }



}
