import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  IonicModule, Platform } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { Capacitor } from '@capacitor/core';
import { HeaderComponent } from './shared/components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, IonicModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PetApp';
  isNative: boolean;

  constructor(private platform: Platform) {
    this.isNative = Capacitor.isNativePlatform();
  }

  initializeApp() {
    if (this.isNative) {
      document.body.classList.add('native');
      if (this.platform.is('android')) {
        document.body.classList.add('android');
      }
    } else {
      document.body.classList.add('web');
    }
  }
}
