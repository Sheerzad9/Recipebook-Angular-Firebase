import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'shoping-list', component: ShoppingListComponent },
    ]),
  ],
})
export class ShoppingListModule {}
