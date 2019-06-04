import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private RecipesService: RecipeService, private slService: ShoppingListService
   ,private router: Router) { }

  ngOnInit() {
    this.recipes= this.RecipesService.getRecipes();
  }

  onEditItem() {
     this.router.navigate(['recipes/new']);
  }
}
