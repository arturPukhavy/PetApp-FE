import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { HomeService } from '../../core/services/home.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, ModalComponent, RouterModule, MapComponent, FilterComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  sitters = [
    { name: 'Alice', description: 'Loving and experienced sitter.', rate: 20, photoUrl: 'path/to/alice.jpg' },
    { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg' },
    // Add more sitters as needed
  ];

  petsInNeed = [
    { name: 'Rex', description: 'A friendly golden retriever.', ownerName: 'John', photoUrl: 'path/to/rex.jpg' },
    { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg' },
    // Add more pets as needed
  ];

  showSitter: boolean = true;
  isModalOpen = false;
  modalRecipient: string;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.showSitter$.subscribe(showSitter => {
      this.showSitter = showSitter;
    });
  }

  openModal(name: string) {
    this.modalRecipient = name;
    this.isModalOpen = true;
  }

}
