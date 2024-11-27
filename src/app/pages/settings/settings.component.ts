import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SettingsComponent  implements OnInit {
  selectedLanguage = 'en'; // Default language
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor() { }

  ngOnInit() {}

  saveLanguage() {
    // Logic to save the selected language
    console.log(`Language changed to: ${this.selectedLanguage}`);
    // Add code to persist the language preference
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Logic to change the password
    console.log("Password changed");
    // Add code to persist the new password
  }

}
