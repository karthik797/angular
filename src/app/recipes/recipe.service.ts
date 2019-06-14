import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Recipe[]=[
    new Recipe('Butter naan ',
    'Like most breads, naan too is made with basic ingredients like flour, yeast, water/milk, sugar. I add some yogurt to it keep it soft and nice. Since this recipe is for garlic naan, I also add some grated garlic to the dough and then brush the naan with lots of garlic butter.', 
    'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940',
    [
      new Ingredient('Milk',1),
      new Ingredient('Yeast',2),
    ]
    ),

    new Recipe('Dosa',
    'A dosa is a cooked flat thin layered rice batter, originating from the Indian subcontinent, made from a fermented batter. ',
    'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940',
    [
      new Ingredient('Rice',1),
      new Ingredient('Tomato',2),
    ])
  
  ];
constructor(private shoppingListService: ShoppingListService){}

  getRecipes()
  {
    return this.recipes.slice();
  }
  addIngredientsToShoppinList(ingredients:Ingredient[])
  {
    this.shoppingListService;
  }
}
