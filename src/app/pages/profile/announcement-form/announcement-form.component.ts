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

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.adData = this.profileService.getAdData();
  }

  submitAd() {
    const ownerData = {
      ownerName: this.adData.ownerName,
      description: this.adData.petDescription,
      name: this.adData.petName,
      photoUrl: this.adData.petPhoto,
      available: !this.adData.available,
    };

    this.profileService.updateOwner(ownerData);
    console.log(ownerData);
  }

}
