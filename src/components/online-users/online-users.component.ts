import { Component } from '@angular/core';
import { DataService } from '../../providers/data/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile/profile.interface';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>

  constructor(private data: DataService, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline() {
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    });
  }

  setUserOneline() {

  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', { profile });
  }
}
