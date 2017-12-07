import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Channel } from '../../models/channel/channel.interface';

@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({name: channelName});
  }

  getChannelListRef(): FirebaseListObservable<Channel> {
    return this.database.list(`channel-names`)
  }

}
