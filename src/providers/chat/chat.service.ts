import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string) {
    this.database.list(`/channel-names/`).push({name: channelName});
  }

}
