import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Channel } from '../../models/channel/channel.interface';
import { ChannelMessage } from '../../models/channel/channel-message.interface';

@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({name: channelName});
  }

  getChannelListRef(): FirebaseListObservable<Channel[]> {
    return this.database.list(`channel-names`)
  }

  getChannelChatRef(channelKey: string): FirebaseListObservable<ChannelMessage[]> {
    return this.database.list(`channels/${channelKey}`);
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.database.list(`/channels/${channelKey}`).push(message);
  }
}
