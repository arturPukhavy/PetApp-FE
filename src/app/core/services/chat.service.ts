import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Message {
  text: string;
  sent: boolean;
  timestamp: string;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  messages: Message[];
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private mockChats: Chat[] = [
    {
      id: 1,
      name: 'Alice',
      avatar: 'assets/alice.jpg',
      messages: [
        { text: 'Hi there!', sent: false, timestamp: '10:00 AM' },
        { text: 'Hello!', sent: true, timestamp: '10:01 AM' },
      ],
    },
    {
      id: 2,
      name: 'Bob',
      avatar: 'assets/bob.jpg',
      messages: [
        { text: 'Good morning!', sent: false, timestamp: '9:00 AM' },
      ],
    },
    {
      id: 3,
      name: 'Charlie',
      avatar: 'assets/charlie.jpg',
      messages: [],
    },
  ];

  constructor() {}

  getChats(): Observable<Chat[]> {
    // Replace `of(this.mockChats)` with an HTTP call to fetch chats from a backend
    return of(this.mockChats);
  }

  getMessages(chatId: number): Observable<Message[]> {
    // Replace with an HTTP call to fetch messages for a specific chat
    const chat = this.mockChats.find((c) => c.id === chatId);
    return of(chat ? chat.messages : []);
  }
}