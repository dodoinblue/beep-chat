import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat/chat.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Message } from '../../models/messages/message.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-last-message-list',
  templateUrl: 'last-message-list.component.html'
})
export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Message[]>

  constructor(private chat: ChatService) {
  }

  ngOnInit() {
    this.messageList$ = this.chat.getLastMessagesForUser();
  }
}
