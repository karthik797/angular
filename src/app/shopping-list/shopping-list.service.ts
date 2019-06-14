import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
 

 private ingredients: Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes', 10),
]; 


  getIngredient()
  {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient)
  {
    console.log("in service " , ingredient);
    this.ingredients.push(ingredient);
    this.ingredients.forEach(Ingredient => console.log( Ingredient.amount));
  }
  addIngredients(ingredients: Ingredient[])
  {
    /*for(let ingredient of ingredients)
    {
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(..ingredients);
  }
}
