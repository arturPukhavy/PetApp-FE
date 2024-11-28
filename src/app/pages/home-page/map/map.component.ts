import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeService } from '../../../core/services/home.service';
import * as L from 'leaflet';

@Component({
    imports: [CommonModule, GoogleMapsModule],
    standalone: true,
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: L.Map;
  center = { lat: 37.7749, lng: -122.4194 }; // Default center
  zoom = 12; // Default zoom level
  selectedLocation: any; // To hold the currently selected location
  locations = []; // Array to hold markers
  showSitter: boolean = true;
  
  // Sample data
  sitters = [
    { name: 'Alice', lat: 37.7749, lng: -122.4194, description: 'Experienced sitter' },
    { name: 'Bob', lat: 37.7849, lng: -122.4094, description: 'Loves dogs' }
  ];

  petsInNeed = [
    { name: 'Rex', lat: 37.7649, lng: -122.4294, description: 'Golden Retriever needing care' },
    { name: 'Mittens', lat: 37.7549, lng: -122.4194, description: 'Cat needing a sitter' }
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.initMap();
  }

  toggleDisplay() {
    this.homeService.toggleDisplay();
    this.showSitter = !this.showSitter;
    if (this.showSitter) {
      this.loadMarkers(this.sitters); // Load sitters
    } else {
      this.loadMarkers(this.petsInNeed); // Load pets
    }
  }

  initMap(): void {
    this.map = L.map('map').setView([37.7749, -122.4194], 12); // Set initial view to San Francisco

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Load initial markers
    this.loadMarkers(this.sitters);
  }

  loadMarkers(locations: any[]): void {
    if (this.map) {
      // Clear existing markers
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });

      locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(this.map)
          .bindPopup(location.name)
          .on('click', () => {
            this.selectedLocation = location; // Set selected location on marker click
          });
      });
    }
  }

  contactOwner() {
    if (this.selectedLocation) {
      alert(`Contacting ${this.selectedLocation.name}`);
    }
  }

  close() {
    this.selectedLocation = false;
  }

}
