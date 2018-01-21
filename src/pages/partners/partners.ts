import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { PartnerProvider } from '../../providers/partner/partner';


@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html'
})
export class PartnersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ga: GoogleAnalytics,private partnerProvider: PartnerProvider) { }
  partners = [];
  ionViewDidLoad() {
    this.partners = [
      { img:"assets/img/mostafa.jpg",name: "Dr Mustafa MaHrouky", since: "June 29, 2016", fb: "mostafa.elmahrouky" }
    ]
    this.partnerProvider.getPartnersByDefaultCountry().subscribe(partners=>{
      if(partners.length >= 1){
        this.partners = partners;
      }
    })
    this.ga.trackView('Parteners Screen')
  }

}