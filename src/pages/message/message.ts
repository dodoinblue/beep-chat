import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/messages/message.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { DataService } from '../../providers/data/data.service';
import { ChatService } from '../../providers/chat/chat.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;
  messageList: Observable<Message[]>;
  userId: string;
  userProfile: Profile;

  constructor(private chat: ChatService, private auth: AuthService, private data: DataService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    // this.messageList = MESSAGE_LIST;
    this.auth.getAuthenticatedUser().subscribe(auth => this.userId = auth.uid);
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.userId = profile.$key;
    });

    this.messageList = this.chat.getChats(this.selectedProfile.$key);
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userId,
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        content: content
      }
      await this.chat.sendChat(message);
    } catch (e) {
      console.log(e)
    }
  }
}
