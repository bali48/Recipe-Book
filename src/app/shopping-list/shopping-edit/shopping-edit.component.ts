import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppinglistService: ShoppingListService) { }
  isEditMode = false;
  editindex : number;
  Subscribtion: Subscription;
  editedItem: Ingredient;
  @ViewChild('f') IngredientForm: NgForm;
  ngOnInit() {
    this.Subscribtion = this.shoppinglistService.startEdit.subscribe(
        (index: Number) =>{
          this.editindex = +index;
          this.editedItem = this.shoppinglistService.getSingleItem(this.editindex);
          this.IngredientForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
          this.isEditMode = true;
    }
    )
  }

  onItemAdd(form: NgForm){
    const value = form.value;
    const ingredient = new Ingredient(value.name,value.amount)
    if(this.isEditMode){
      this.shoppinglistService.updateIngredient(this.editindex,ingredient);
      this.isEditMode = false;
    }else {
      this.shoppinglistService.addIngredient(ingredient);
    }
    form.resetForm();

  }


  ngOnDestroy(): void {
      this.Subscribtion.unsubscribe();
  }

}
