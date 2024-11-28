import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    imports: [CommonModule, FormsModule, RouterModule],
    standalone: true,
    selector: 'app-announcement-form',
    templateUrl: './announcement-form.component.html',
    styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent  implements OnInit {

  request = {
    petName: '',
    ownerName: '',
    petType: 'dog', // Default selection
    bookingDate: '',
    payment: null,
    image: 'https://avatars.mds.yandex.net/i?id=e2523a6042990badcc0de02187d39d70a762470a-9107157-images-thumbs&n=13' // Example image
  };

  announcementSubmitted = false;

  ngOnInit() {}

  submitAnnouncement() {
    // Handle the submission logic here
    console.log('Pet Care Request:', this.request);

    
  }

}
