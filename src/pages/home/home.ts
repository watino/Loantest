import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public http :Http) {

  }

  openGetSimpleJSON() {
    this.navCtrl.push('GetSimpleJson');
  }

  openGetArrayJSON() {
    this.navCtrl.push('GetArrayJson');
  }

  openPostJSON() {
    this.navCtrl.push('PostJson');
  }

}
