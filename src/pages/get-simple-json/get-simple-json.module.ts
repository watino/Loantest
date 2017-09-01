import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { GetSimpleJson } from './get-simple-json';

@NgModule({
  declarations: [
    GetSimpleJson,
  ],
  imports: [
    IonicPageModule.forChild(GetSimpleJson),
  ],
  exports: [
    GetSimpleJson
  ]
})
export class GetSimpleJsonModule {}
