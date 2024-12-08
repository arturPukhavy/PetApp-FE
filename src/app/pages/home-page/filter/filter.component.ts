import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeService } from '../../../core/services/home.service';
import { Subscription } from 'rxjs';

@Component({
    imports: [RouterModule, CommonModule, FormsModule],
    standalone: true,
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  selectedType = '';
  selectedBreed = '';
  ageMin: number | null = null;
  ageMax: number | null = null;
  price: string = '';
  location: string = '';
  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  sitterFilter = true;
  subs: Subscription;
  isCollapsed = false;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.subs = this.homeService.showSitter$.subscribe((showSitter) => {
      this.sitterFilter = showSitter;
  
      // Load persisted filters when page loads
      const savedFilters = JSON.parse(localStorage.getItem('filters') || '{}');
      if (savedFilters.type) {
        this.selectedType = savedFilters.type;
      }
      if (savedFilters.breed) {
        this.selectedBreed = savedFilters.breed;
      }
      if (savedFilters.ageMin) {
        this.ageMin = savedFilters.ageMin;
      }
      if (savedFilters.ageMax) {
        this.ageMax = savedFilters.ageMax;
      }
      if (savedFilters.price) {
        this.price = savedFilters.price;
      }
      if (savedFilters.location) {
        this.location = savedFilters.location;
      }
      if (savedFilters.dateFrom) {
        this.dateFrom = savedFilters.dateFrom;
      }
      if (savedFilters.dateTo) {
        this.dateTo = savedFilters.dateTo;
      }
    });
  }

  toggleFilters() {
    this.isCollapsed = !this.isCollapsed;
  }

  applyFilters(event: Event) {
    event.preventDefault();
  
    const filters = {
      type: this.selectedType,
      breed: this.selectedBreed,
      ageMin: this.ageMin,
      ageMax: this.ageMax,
      price: this.price,
      location: this.location,
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    };
  
    // Save the current filters to localStorage
    localStorage.setItem('filters', JSON.stringify(filters));
  
    const type = this.sitterFilter ? 'sitters' : 'pets';
    this.homeService.updateFilters(type, filters);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearFilters() {
    // Reset all filter variables
    this.selectedType = '';
    this.selectedBreed = '';
    this.ageMin = null;
    this.ageMax = null;
    this.price = '';
    this.location = '';
    this.dateFrom = null;
    this.dateTo = null;
  
    // Clear from localStorage
    localStorage.removeItem('filters');
  
    // Optionally, reset filters in the service
    this.homeService.updateFilters(this.sitterFilter ? 'sitters' : 'pets', {});
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
