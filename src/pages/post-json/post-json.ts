import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the PostJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-json',
  templateUrl: 'post-json.html',
})
export class PostJson {

  returnMessage = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  sendRequest(username, email) {

    let jsonData;

    // Create JSON object from username & email
    
    let jsObject = {name:username , email: email}
    jsonData = JSON.stringify(jsObject);
    console.log(jsObject);
    // Pass JSON as 2nd parameter
    this.http.post('http://www.nextflow.in.th/example/phonegap/post/post-object.php', jsonData)
        .map(res => {
          return res.json();
        }).subscribe(data => {
           this.returnMessage = data.message;
        
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJson');
  }

}
