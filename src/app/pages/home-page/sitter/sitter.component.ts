import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../core/models/pet-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  imports: [CommonModule, ModalComponent],
  standalone: true,
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.scss'],
})
export class SitterComponent  implements OnInit {
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
