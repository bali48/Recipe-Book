import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
  }

  onseleted(){
    // this.selectedRecipe.emit();
    this.RecipeService.SelectedRecipe.emit(this.recipe);
  }

}
