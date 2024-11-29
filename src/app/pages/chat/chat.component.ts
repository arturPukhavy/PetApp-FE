import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Message {
  text: string;
  sent: boolean;
  timestamp: string; // Add timestamp for messages
}

interface Chat {
  name: string;
  avatar: string; // Add avatar for each chat
  messages: Message[];
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats: Chat[] = [
    { name: 'Alice', avatar: 'assets/alice.jpg', messages: [] },
    { name: 'Bob', avatar: 'assets/bob.jpg', messages: [] },
    { name: 'Charlie', avatar: 'assets/charlie.jpg', messages: [] }
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
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.selectedChat.messages.push({ text: this.newMessage, sent: true, timestamp });
      this.newMessage = '';

      // Simulate receiving a message
      setTimeout(() => {
        const responseTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.selectedChat?.messages.push({ text: 'This is a response.', sent: false, timestamp: responseTimestamp });
      }, 1000);
    }
  }
}
