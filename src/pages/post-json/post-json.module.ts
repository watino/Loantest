import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostJson } from './post-json';

@NgModule({
  declarations: [
    PostJson,
  ],
  imports: [
    IonicPageModule.forChild(PostJson),
  ],
  exports: [
    PostJson
  ]
})
export class PostJsonModule {}
