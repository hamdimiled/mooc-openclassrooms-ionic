import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../../models/Appareils';
import { AppareilsServices } from '../../../services/appareils.service';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {

  index: number;
  appareil: Appareil;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private appareilsService: AppareilsServices) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }
}