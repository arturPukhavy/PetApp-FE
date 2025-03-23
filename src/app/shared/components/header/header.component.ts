import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    standalone: true,
    selector: 'app-header',
    imports: [IonicModule, CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNative: boolean;
  isLoggedIn$ = this.authService.isLoggedIn;

  constructor(private platform: Platform, private authService: AuthService, private router: Router) {
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

}
