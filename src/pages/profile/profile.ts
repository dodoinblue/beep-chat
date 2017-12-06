import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(private app: App, private auth: AuthService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', {existingProfile: this.existingProfile});
  }

  signOut() {
    this.auth.signOut();
    this.app.getRootNav().setRoot('LoginPage');
  }

}
