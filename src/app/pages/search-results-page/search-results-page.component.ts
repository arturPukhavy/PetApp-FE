import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pet } from '../../core/models/pet-model';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ModalComponent],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  pets: Pet[] = [];
  filterOpened = false;
  selectedType = '';
  selectedBreed = '';
  ageMin: number | null = null;
  ageMax: number | null = null;
  isModalOpen = false;
  modalRecipient: string;

  searchedPets = [
    { id: 1, name: 'Buddy', ownerName: 'John', breed: 'Dog', age: 3, image: 'https://example.com/image1.jpg' },
    { id: 2, name: 'Mittens', ownerName: 'Ela',  breed: 'Cat', age: 2, image: 'https://example.com/image2.jpg' },
    // Add more sample data
  ];

  searchedSitters = [
    { id: 1, name: 'Leha', description: 'Loving and experienced sitter.', rate: 20, image: 'https://example.com/image1.jpg' },
    { id: 2, name: 'Mittens', description: 'Available for weekend stays.', rate: 25, image: 'https://example.com/image2.jpg' },
    // Add more sitters as needed
  ];

  openFilter() {
    this.filterOpened = true;
  }

  closeFilter() {
    this.filterOpened = false;
  }

  applyFilters(event: Event) {
    event.preventDefault();
    // Implement filter logic here to update searchResults based on selected filters.
    this.closeFilter();
  }

  openModal(name: string) {
    this.modalRecipient = name;
    this.isModalOpen = true;
  }

}
