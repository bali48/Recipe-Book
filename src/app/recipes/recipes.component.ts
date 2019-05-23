import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  DetailRecipe : Recipe;
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.RecipeService.SelectedRecipe.subscribe(
        (recipe: Recipe) => {
          this.DetailRecipe = recipe;
        }
    )
  }



}
