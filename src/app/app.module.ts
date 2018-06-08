import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { itemsReducer } from './redux/items.reducer';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemsService } from './items.service';
import { EditComponent } from './item-edit/item-edit.component';

const appRoutes: Routes = [
  { path: '', component: ItemComponent},
  { path: 'create', component: ItemAddComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemAddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({itemPage: itemsReducer}),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
