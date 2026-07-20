import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterList } from '../master-list/master-list';


@NgModule({
  declarations: [MasterList],
  imports: [
    CommonModule,
  ],
  exports : [MasterList]
})
export class MasterModule { }
