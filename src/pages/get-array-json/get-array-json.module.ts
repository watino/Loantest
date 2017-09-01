import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetArrayJson } from './get-array-json';

@NgModule({
  declarations: [
    GetArrayJson,
  ],
  imports: [
    IonicPageModule.forChild(GetArrayJson),
  ],
  exports: [
    GetArrayJson
  ]
})
export class GetArrayJsonModule {}
