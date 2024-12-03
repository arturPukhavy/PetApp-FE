import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HomeService } from '../../core/services/home.service';
import { ProfileService } from '../../core/services/profile.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, ModalComponent, RouterModule, FilterComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  sitters = [
    { name: 'Alice', description: 'Loving and experienced sitter.', rate: 20, photoUrl: 'path/to/alice.jpg', available: true },
    { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
    { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
    { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
    { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
    // Add more sitters as needed
  ];

  petsInNeed = [
    { name: 'Rex', description: 'A friendly golden retriever.', ownerName: 'John', photoUrl: 'path/to/rex.jpg', available: false },
    { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
    { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },
    { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
    { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },
    // Add more pets as needed
  ];

  filteredSitters = [...this.sitters];
  filteredPets = [...this.petsInNeed];
  availableSitters: any[] = [];
  availableOwners: any[] = [];

  showSitter: boolean = true;
  isShowedAll = true;
  isModalOpen = false;
  modalRecipient: string;

  constructor(private homeService: HomeService, private profileService: ProfileService) {}

  ngOnInit() {
    // Load sitters from ProfileService
    this.profileService.sitters$.subscribe((sitters) => {
      this.sitters = sitters;
      this.filteredSitters = [...this.sitters]; // Update filteredSitters whenever sitters change
    });

    // Load available sitters
    this.profileService.availableSitters$.subscribe((availableSitters) => {
      this.availableSitters = availableSitters;
    });

    this.profileService.owners$.subscribe((owners) => {
      this.petsInNeed = owners;
      this.filteredPets = [...this.petsInNeed]; 
    });

    this.profileService.availableOwners$.subscribe((availableOwners) => {
      this.availableOwners = availableOwners;
    });
    this.showAvailable();
  }

  toggleDisplay() {
    this.homeService.toggleDisplay();
    this.showSitter = !this.showSitter;
    this.showAvailable();
  }

  showAll() {
    this.isShowedAll = true;
    if (this.showSitter) {
      this.filteredSitters = [...this.sitters, ...this.availableSitters];
    } else {
      this.filteredPets = [...this.petsInNeed, ...this.availableOwners];
    }
  }
  
  showAvailable() {
    this.isShowedAll = false;
    if (this.showSitter) {
      this.filteredSitters = this.availableSitters;
    } else {
      this.filteredPets = this.availableOwners;
    }
  }

  openModal(name: string) {
    this.modalRecipient = name;
    this.isModalOpen = true;
  }

}
