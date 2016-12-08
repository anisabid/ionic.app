import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  title:string = 'My first angular2-google-maps project';

  lat:number = 51.678418;
  lng:number = 7.809007;

  constructor(public navCtrl:NavController) {


  }

}
