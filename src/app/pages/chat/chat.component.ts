import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Message {
  text: string;
  sent: boolean;
}

interface Chat {
  name: string;
  messages: Message[];
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {
  chats: Chat[] = [
    { name: 'Alice', messages: [] },
    { name: 'Bob', messages: [] },
    { name: 'Charlie', messages: [] }
  ];
  
  selectedChat: Chat | null = null;
  newMessage: string = '';

  constructor() { }

  ngOnInit() {}

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedChat) {
      this.selectedChat.messages.push({ text: this.newMessage, sent: true });
      this.newMessage = '';

      // Simulate receiving a message
      setTimeout(() => {
        this.selectedChat?.messages.push({ text: 'This is a response.', sent: false });
      }, 1000);
    }
  }

}
