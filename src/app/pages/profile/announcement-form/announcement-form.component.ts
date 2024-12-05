import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
    imports: [CommonModule, FormsModule, RouterModule],
    standalone: true,
    selector: 'app-announcement-form',
    templateUrl: './announcement-form.component.html',
    styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent  implements OnInit {
  @ViewChild('adForm') adForm: NgForm;
  adData: any;
  isAdSubmitted: boolean = false;
  booking: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.adData = this.profileService.getAdData(); // Ensure this returns a valid object
  }

  submitAd() {
    const ownerData = {
      ownerName: this.adData.name,
      description: this.adData.petDescription,
      name: this.adData.petName,
      photoUrl: this.adData.petPhoto,
      available: true,
      booking: {
        from: this.adData.bookingDateFrom,
        to: this.adData.bookingDateTo
      },
      payment: this.adData.payment
    };

    this.profileService.updateOwner(ownerData); // Update owner data
    this.profileService.setAdData(ownerData);   // Set the ad data
    console.log(ownerData);

    this.profileService.setChecked(true);
}

}
