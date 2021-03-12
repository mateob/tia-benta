import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoDynamicModule, PoTableModule, PoMenuModule, PoPageModule } from '@po-ui/ng-components';

const poUiModel = [
  PoDynamicModule,
  PoTableModule,
  PoMenuModule,
  PoPageModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    poUiModel
  ],
  exports: [
    CommonModule,
    poUiModel
  ]
})
export class SharedModule { }
