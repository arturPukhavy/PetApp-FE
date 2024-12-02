import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';

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
  role: 'sitter' | 'petOwner' = 'petOwner'; // Default role
  available = false; // Track visibility of the availability message
  shownSitter = false;
  shownOwner = false;

  // Sample data
  ads = [
    { title: 'Looking for a sitter', status: 'Active' },
  ];

  requests = [
    { petName: 'Fido', status: 'Pending' },
  ];

  suggestions = [
    { text: 'Here is the list of your suggestions' },
  ];

  petInfo = {
    name: 'Fido',
    breed: 'Golden Retriever',
    age: '3 years',
    caseHistory: 'No medical issues. Friendly with other pets.',
  };

  sitterInfo = {
    description: 'Experienced pet sitter with love for animals.',
    experience: '5 years',
    workingHours: 'Available from 9 AM to 5 PM',
    isAvailable: false,
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    // Load availability status from the service
    this.sitterInfo.isAvailable = this.profileService.getAvailability();
    this.available = this.sitterInfo.isAvailable;
  }

  onClose() {
    this.isEditing = false;
  }

  toggleRole() {
    this.role = this.role === 'sitter' ? 'petOwner' : 'sitter'; // Toggle role
    this.available = false;
  }

  toggleAvailability() {
    this.available = !this.available;

    // Save the availability status in the service
    this.profileService.setAvailability(this.sitterInfo.isAvailable);
  }

  toggleShownSitter() {
    this.shownSitter = !this.shownSitter;
  }

  toggleShownOwner() {
    this.shownOwner = !this.shownOwner;
  }
}

