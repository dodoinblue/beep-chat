import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';
import { User } from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data: DataService, public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  login(event) {
    console.log(event);
    if(!event.error) {
      this.data.getProfile(<User>event.result).subscribe(profile => {
        console.log(profile);
        profile.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      });

    } else {
      this.toast.create({
        message: 'Login failed: ' + event.error.message,
        duration: 3000
      }).present();
    }
  }
}
