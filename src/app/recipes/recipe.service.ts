import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Bolognese-Pasta',
  //     'This is fabulous pasta',
  //     'https://cdn.pixabay.com/photo/2017/01/17/17/05/spaghetti-1987454__480.jpg',
  //     [new Ingredient('Pasta bags', 1), new Ingredient('Meat', 2)]
  //   ),
  //   new Recipe(
  //     'Pizza Donatello!',
  //     'This is amazing pizza!',
  //     'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191__340.jpg',
  //     [new Ingredient('Mozzarella', 1), new Ingredient('Basilika', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
