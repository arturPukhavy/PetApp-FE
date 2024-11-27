import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [CommonModule, FormsModule],
    standalone: true,
    selector: 'app-announcement-form',
    templateUrl: './announcement-form.component.html',
    styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent  implements OnInit {

  sitter = {
    name: '',
    description: '',
    workingHours: '',
    rate: null,
    image: 'https://static1.bigstockphoto.com/8/7/5/large1500/5781083.jpg' // Example image
  };

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
    console.log('Sitter Details:', this.sitter);
    console.log('Pet Care Request:', this.request);
    
  }

}
