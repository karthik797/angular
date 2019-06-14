import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
   @ViewChild('amountInput', { static: true }) amountRef: ElementRef;
   

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName=this.nameInputRef.nativeElement.value;
    const ingtAmount=this.amountRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingtAmount);
    console.log(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
