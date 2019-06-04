import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {forEach} from '@angular/router/src/utils/collection';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  public itemnotifier = new Subject();
  public startEdit = new Subject();
  constructor() { }

  getIngredientList(){
    return this.ingredients.slice();
  }

  getSingleItem(index: number){
    return this.ingredients[index];
  }

  addIngredient(item: Ingredient){
    this.ingredients.push(item);
    this.itemnotifier.next(this.ingredients.slice());
  }

  addRecipeIngredientList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.itemnotifier.next(this.ingredients);
  }

  updateIngredient(index, newIngredient){
    this.ingredients[index] = newIngredient;
    this.itemnotifier.next(this.ingredients);
  }


}
