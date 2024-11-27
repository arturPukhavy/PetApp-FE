import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center = { lat: 37.7749, lng: -122.4194 }; // Default center
  zoom = 12; // Default zoom level
  selectedLocation: any; // To hold the currently selected location
  locations = []; // Array to hold markers
  
  // Sample data
  sitters = [
    { name: 'Alice', lat: 37.7749, lng: -122.4194, description: 'Experienced sitter' },
    { name: 'Bob', lat: 37.7849, lng: -122.4094, description: 'Loves dogs' }
  ];

  petsInNeed = [
    { name: 'Rex', lat: 37.7649, lng: -122.4294, description: 'Golden Retriever needing care' },
    { name: 'Mittens', lat: 37.7549, lng: -122.4194, description: 'Cat needing a sitter' }
  ];

  ngOnInit(): void {
    
  }

  // Show sitters on the map
  showSitters() {
    this.loadMap(this.sitters);
  }

  // Show pets needing sitters on the map
  showPetsInNeed() {
    this.loadMap(this.petsInNeed);
  }

  // Load the map with given locations
  loadMap(locations: any[]) {
    const mapElement = document.getElementById('map');

  if (mapElement) {
    const map = new google.maps.Map(mapElement, {
      center: { lat: 37.7749, lng: -122.4194 }, // Default center
      zoom: 12
      
    });  
  
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name
      });
  
      marker.addListener('click', () => {
        this.selectedLocation = location;
      });
    });
    }
  }

  selectLocation(location: any) {
    this.selectedLocation = location;
  }

  // Example function to handle contact action
  contactOwner() {
    // Logic to contact the owner of the selected location
    alert(`Contacting ${this.selectedLocation.name}`);
  }

}
