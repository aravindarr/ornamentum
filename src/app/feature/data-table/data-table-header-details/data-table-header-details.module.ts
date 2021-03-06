import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'ornamentum';

import {
  DataTableHeaderDetailsComponent,
  TableHeaderDetailsUsageComponent,
  TableHeaderDetailsShowRefreshBtnUsageComponent,
  TableHeaderDetailsTitleUsageComponent,
  TableHeaderDetailsShowColumnSelectorUsageComponent
} from './index';

import { DataTableHeaderDetailsRoutingModule } from './data-table-header-details-routing.module';

import { SharedModule } from '../../../shared/shared.module';

/**
 * Module class for containing data table header details module.
 * @class DataTableHeaderDetailsModule
 */
@NgModule({
  declarations: [
    DataTableHeaderDetailsComponent,
    TableHeaderDetailsUsageComponent,
    TableHeaderDetailsShowRefreshBtnUsageComponent,
    TableHeaderDetailsTitleUsageComponent,
    TableHeaderDetailsShowColumnSelectorUsageComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableHeaderDetailsRoutingModule
  ],
  providers: []
})
export class DataTableHeaderDetailsModule {
}
