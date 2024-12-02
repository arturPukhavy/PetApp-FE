import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [IonicModule, CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNative: boolean;

  constructor(private platform: Platform) {
    this.isNative = this.platform.is('capacitor');
  }

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    
    // Logic to change the application language
    console.log('Selected language:', language);
    
    // Save language preference (optional)
    localStorage.setItem('selectedLanguage', language);
    
  }

}
