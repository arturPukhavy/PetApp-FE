import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ChatService } from '../../core/services/chat.service';


interface Message {
  text: string;
  sent: boolean;
  timestamp: string; // Add timestamp for messages
}

interface Chat {
  id: number;
  name: string;
  avatar: string; // Add avatar for each chat
  messages: Message[];
}

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats: Chat[] = [];
  selectedChat: Chat | null = null;
  newMessage: string = '';

  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    // Load chats from the service (or API in the future)
    this.chatService.getChats().subscribe((chats) => {
      this.chats = chats;
    });
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat;

    // Optionally fetch messages for the selected chat (if messages are loaded dynamically)
    if (chat.id) {
      this.chatService.getMessages(chat.id).subscribe((messages) => {
        this.selectedChat!.messages = messages;
      });
    }
  }

  goToUserInfo() {
    this.router.navigate(['/sitter'], { queryParams: { fromChat: true } });
  }

  sendMessage() {
    if (this.newMessage.trim() && this.selectedChat) {
      const timestamp = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      const newMessage: Message = {
        text: this.newMessage,
        sent: true,
        timestamp,
      };

      this.selectedChat.messages.push(newMessage);

      // Reset the input field
      this.newMessage = '';

      // Simulate a response from the service (or backend in the future)
      setTimeout(() => {
        const responseTimestamp = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        const responseMessage: Message = {
          text: 'This is a response.',
          sent: false,
          timestamp: responseTimestamp,
        };

        this.selectedChat?.messages.push(responseMessage);
      }, 1000);
    }
  }
}