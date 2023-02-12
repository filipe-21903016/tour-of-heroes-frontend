import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(protected messageService: MessageService) { }
}
