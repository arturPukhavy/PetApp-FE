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
  ownerData: any;
  showContactButton: boolean = true;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ownerData = this.profileService.getAdData();

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
