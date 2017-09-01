import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the GetArrayJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-array-json',
  templateUrl: 'get-array-json.html',
})
export class GetArrayJson {

  contacts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
  }

  sendRequest() {

    let url = 'http://www.nextflow.in.th/example/phonegap/ng-jsonp/simple-array.php';

    this.http.get(url).map(res => {

      return res.json();

    }).subscribe(data => {

      // Assign data (array type) to property
      this.contacts = data;

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GetArrayJson');
  }

}
