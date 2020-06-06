import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxaPage } from './taxa.page';

const routes: Routes = [
  {
    path: '',
    component: TaxaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxaPageRoutingModule {}
