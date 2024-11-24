import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  isNative: boolean;

  constructor(private platform: Platform) {
    this.isNative = this.platform.is('capacitor');
  }

}
