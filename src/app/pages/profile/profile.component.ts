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
  profilePhoto: string = 'https://static1.bigstockphoto.com/8/7/5/large1500/5781083.jpg';
  username = 'John';
  location = 'Barysau';
  email = 'john.doe@example.com';
  role: 'sitter' | 'petOwner' = 'petOwner'; // Default role
  available = false; // Track visibility of the availability message
  shownSitter = false;
  shownOwner = false;

  petInfo = {
    photo: 'https://avatars.mds.yandex.net/i?id=e2523a6042990badcc0de02187d39d70a762470a-9107157-images-thumbs&n=13',
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

  onPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePhoto = e.target.result; // Update profile photo
      };
      reader.readAsDataURL(file);
    }
  }

  onPetPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.petInfo.photo = e.target.result; // Update profile photo
      };
      reader.readAsDataURL(file);
    }
  }

  onSave(): void {
    this.isEditing = false;
    alert('Profile updated successfully!');
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
      this.shownOwner = !this.shownOwner;
  
      const ownerData = {
        ownerName: this.username,
        description: this.petInfo.caseHistory,
        name: this.petInfo.name,
        photoUrl: this.petInfo.photo,
        available: this.available,
      };
  
      this.profileService.updateOwner(ownerData);
    }
    if (type === 'sitter') {
      this.shownSitter = !this.shownSitter;
  
      const sitterData = {
        name: this.username,
        description: this.sitterInfo.description,
        rate: 20, // Example rate
        photoUrl: this.profilePhoto,
        available: this.available,
      };
  
      // Update the sitter's details
      this.profileService.updateSitter(sitterData);
    } else if (type === 'availability') {
      this.available = !this.available;
  
      // Update the sitter's availability
      const sitterData = {
        name: this.username,
        description: this.sitterInfo.description,
        rate: 20,
        photoUrl: this.profilePhoto,
        available: this.available,
      };
  
      this.profileService.updateSitter(sitterData);
    }
  }

  createAd() {
    const announcementData = {
      ownerName: this.username,
      petName: this.petInfo.name,
      petType: this.petInfo.type,
      petDescription: this.petInfo.caseHistory,
      petPhoto: this.petInfo.photo,
      available: this.available,
      location: this.location, // Replace with actual location if available
    };
    
    this.profileService.setAdData(announcementData);
    this.router.navigate(['/form']); 
  }
}

