import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardComponent} from './components/card/card.component';
import {SearchItemsBlockComponent} from './components/search-items-block/search-items-block.component';

const routes: Routes = [
  {path: '', redirectTo: 'search/', pathMatch: 'full'},
  {path: 'card/:id', component: CardComponent},
  {path: 'search/:searchString', component: SearchItemsBlockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
