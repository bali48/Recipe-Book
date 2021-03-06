import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredientList();
    this.shoppinglistService.itemnotifier.subscribe(
        (ingredient: Ingredient[]) => {
            this.ingredients = ingredient;
        }
    )
  }

  onEditItem(index: Number){
      this.shoppinglistService.startEdit.next(index);
  }


}
