import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  IonicModule, Platform } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { Capacitor } from '@capacitor/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@Component({
    standalone: true,
    selector: 'app-root',
    imports: [HeaderComponent, IonicModule, CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'PetApp';
  isNative: boolean;

  constructor(private platform: Platform) {
    this.isNative = this.platform.is('capacitor');
  }

  ngOnInit() {
    // this.initializeApp();
  }

  // initializeApp() {
  //   if (this.isNative) {
  //     document.body.classList.add('native');
  //     if (this.platform.is('android')) {
  //       document.body.classList.add('android');
  //     }
  //   } else {
  //     document.body.classList.add('web');
  //   }
  // }
}
