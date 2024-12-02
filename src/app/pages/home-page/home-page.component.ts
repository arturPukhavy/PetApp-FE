import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { HomeService } from '../../core/services/home.service';

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

  showSitter: boolean = true;
  isShowedAll = true;
  isModalOpen = false;
  modalRecipient: string;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.filterData$.subscribe(({ type, filters }) => {
      if (type === 'sitters') {
        this.filteredSitters = this.homeService.applyFilters(this.sitters, filters);
      } else if (type === 'pets') {
        this.filteredPets = this.homeService.applyFilters(this.petsInNeed, filters);
      }
    });
  }

  toggleDisplay() {
    this.homeService.toggleDisplay();
    this.showSitter = !this.showSitter;
  }

  showAll() {
    this.isShowedAll = true;
    if (this.showSitter) {
      this.filteredSitters = [...this.sitters];
    } else {
      this.filteredPets = [...this.petsInNeed];
    }
  }

  showAvailable() {
    this.isShowedAll = false;
    if (this.showSitter) {
      this.filteredSitters = this.sitters.filter(sitter => sitter.available);
    } else {
      this.filteredPets = this.petsInNeed.filter(pet => pet.available);
    }
  }

  openModal(name: string) {
    this.modalRecipient = name;
    this.isModalOpen = true;
  }

}
