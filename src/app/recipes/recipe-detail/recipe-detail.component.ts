import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  element : Recipe;
  id: number;
  constructor(private recipe: RecipeService, private shoppinglist: ShoppingListService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        (param: Params) => {
          // console.log(param)
          this.id = +param['id'];
          this.element = this.recipe.getRecipeByID(this.id);
          // console.log(this.id,this.element);
        }
    );
  }



  AddIngredientToShoppingList(){
    this.shoppinglist.addRecipeIngredientList(this.element.ingredients);
  }
}
