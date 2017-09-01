import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Class and operation we need...
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the GetSimpleJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-simple-json',
  templateUrl: 'get-simple-json.html',
})
export class GetSimpleJson {

  returnData = "";

  // Inject http: Http
  constructor(public navCtrl: NavController, public navParams: NavParams , public http : Http) {

  }

  sendRequest() {

    // Use http property to send get Request
    // this.http.get('url').map(res => res.json).subscribe(data => { data.message })
    let url = 'http://www.nextflow.in.th/example/phonegap/ng-jsonp/simple-string.php';
   
    this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {});

    
  }

  
}
