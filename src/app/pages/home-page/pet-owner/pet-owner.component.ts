import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../core/models/pet-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ProfileService } from '../../../core/services/profile.service';
import { ActivatedRoute } from '@angular/router';

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
  showContactButton: boolean = true;
  ownerData: any = {
    petName: '',
    petPhoto: '',
    name: '',
    petType: '',
    petDescription: '',
    location: '',
    booking: {
      from: '',
      to: ''
    },
    payment: 0
  };

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileService.adData$.subscribe((data) => {
      if (data) {
        this.ownerData = data;
      }
    });

    this.route.queryParams.subscribe(params => {
      this.showContactButton = !params['fromChat'];
    });
  }


  closeModal() {

  }

  confirmBooking() {
    this.bookingConfirmed = true;
 
  }

}
