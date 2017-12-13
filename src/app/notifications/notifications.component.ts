import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(
    private notifications: NotificationsService,
  ) { }

  messages: string[] = []

  messagesShown: boolean = false

  trackByMessages(index: number, message: string): number { return index; }

  showMessages() {
    if (!this.messages.length) return
    this.messagesShown = true;
  }

  hideMessages() {
    this.messagesShown = false;
    this.messages = [];
  }

  ngOnInit() {
    this.notifications.getNotifications().subscribe(arg => {
      if (this.messages.length > 9) return;
      this.messages.push(arg);
    });
  }

}
