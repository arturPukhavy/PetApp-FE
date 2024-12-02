import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  adData: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.adData = this.profileService.getAdData();
  }

  submitAd() {
    // Handle the submission logic here
    console.log('Ad submitted:', this.adData);
  }

}
