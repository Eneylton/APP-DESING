import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxaPageRoutingModule } from './taxa-routing.module';

import { TaxaPage } from './taxa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxaPageRoutingModule
  ],
  declarations: [TaxaPage]
})
export class TaxaPageModule {}
