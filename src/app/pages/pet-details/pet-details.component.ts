import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Pet } from '../../core/models/pet-model';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {
  bookingConfirmed = false;
  pet: Pet;

  closeModal() {

  }

  confirmBooking() {

  }

}
