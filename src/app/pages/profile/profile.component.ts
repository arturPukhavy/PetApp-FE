import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  location = 'Barysau';
  email = 'john.doe@example.com';
  role: 'sitter' | 'petOwner' = 'petOwner'; // Default role
  available = false; // Track visibility of the availability message
  shownSitter = false;
  shownOwner = false;

  petInfo = {
    name: 'Fido',
    type: 'dog',
    breed: 'Golden Retriever',
    age: '3 years',
    caseHistory: 'No medical issues. Friendly with other pets.',
  };

  sitterInfo = {
    description: 'Experienced pet sitter with love for animals.',
    experience: '5 years',
    workingHours: 'Available from 9 AM to 5 PM',
  };

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.shownOwner = false; // Reset for petOwner
    this.shownSitter = false; // Reset for sitter
    this.available = this.profileService.getAvailability();
  }

  onClose() {
    this.isEditing = false;
  }

  toggleRole(newRole: 'sitter' | 'petOwner') {
    this.role = newRole;
    this.resetAvailability(); // Reset when toggling roles
  }

  resetAvailability() {
    // Reset shown flags when switching roles
    if (this.role === 'petOwner') {
      this.shownOwner = false;
    } else {
      this.shownSitter = false;
      this.available = false; // Reset availability as well
    }
  }

  updateAvailabilityMessage(type: 'owner' | 'sitter' | 'availability') {
    if (type === 'owner') {
      // Update shownOwner state based on checkbox
      this.shownOwner = !this.shownOwner;
    } else if (type === 'sitter') {
      // Update shownSitter state based on checkbox
      this.shownSitter = !this.shownSitter;
    } else if (type === 'availability') {
      // Update availability state based on checkbox
      this.available = !this.available;
      this.profileService.setAvailability(this.available);
    }
  }

  createAd() {
    const announcementData = {
      ownerName: this.username,
      petName: this.petInfo.name,
      petType: this.petInfo.type,
      petDescription: this.petInfo.caseHistory,
      location: this.location, // Replace with actual location if available
    };
    
    this.profileService.setAdData(announcementData);
    this.router.navigate(['/form']); 
  }
}

