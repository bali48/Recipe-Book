import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {

  }

  addIngredient(){
    let ingname = this.nameInput.nativeElement.value;
    let ingamount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(ingname,ingamount)
    this.shoppinglistService.addIngredient(ingredient);
  }
}
