import { NgModule , CUSTOM_ELEMENTS_SCHEMA }from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresPageRoutingModule } from './tres-routing.module';

import { TresPage } from './tres.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresPageRoutingModule
  ],
  declarations: [TresPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class TresPageModule {}
