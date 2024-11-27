import { Component, OnInit } from '@angular/core';
import { Pet } from '../../core/models/pet-model';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule, ModalComponent],
    standalone: true,
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent  implements OnInit {
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
