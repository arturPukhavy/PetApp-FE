import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../core/models/pet-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  imports: [CommonModule, ModalComponent],
  standalone: true,
  selector: 'app-pet-owner',
  templateUrl: './pet-owner.component.html',
  styleUrls: ['./pet-owner.component.scss'],
})
export class PetOwnerComponent  implements OnInit {
  bookingConfirmed = false;
  pet: Pet;

  constructor() { }

  ngOnInit() {}


  closeModal() {

  }

  confirmBooking() {
    this.bookingConfirmed = true;
 
  }

}
