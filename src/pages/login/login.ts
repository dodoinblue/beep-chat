import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  login(event) {
    console.log(event);
    if(!event.error) {
      this.navCtrl.setRoot('EditProfilePage');
    } else {
      this.toast.create({
        message: 'Login failed: ' + event.error.message,
        duration: 3000
      }).present();
    }
  }
}
