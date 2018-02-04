import { NgModule } from '@angular/core';
import { AddComponent } from './add.component';

import { CommonModule } from '@angular/common';
import {AddRoutingModule} from './add.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent]
})
export class AddModule { }
