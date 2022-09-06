import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldComponent } from './gold/gold.component';

const routes: Routes = [
  { path: 'silver', component: GoldComponent, data: {type: 'silver'} },
  { path: '', component: GoldComponent, data: {type: 'gold'} },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
