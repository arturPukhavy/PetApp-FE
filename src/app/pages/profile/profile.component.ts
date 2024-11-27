import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Ad } from '../../core/models/ad-model';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-profile',
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isEditing = false;
  username = 'JohnDoe';
  email = 'john.doe@example.com';

  ads = [
    { title: 'Looking for a sitter', status: 'Active' },
    // Add more ads as needed
  ];

  requests = [
    { petName: 'Fido', status: 'Pending' },
    // Add more requests as needed
  ];

  suggestions = [
    { text: 'Consider adopting more pets!' },
    // Add more suggestions as needed
  ];

  onClose() {
    this.isEditing = false;
  }
}
