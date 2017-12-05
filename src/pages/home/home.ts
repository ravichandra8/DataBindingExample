import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isdisabled : boolean = true;
  colorstr : string ='blue';
  textsize : number='40';
  name: string ='ravi';
  constructor(public navCtrl: NavController) {

  }
  showhide() : void {
    this.isdisabled = !this.isdisabled;
  }
//style binding
  addstyles(){
    let styles={
      'font-size.px' : this.textsize,
      'color' : this.colorstr
    };
    return styles;
    }

}
