import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../core/models/pet-model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { ProfileService } from '../../../core/services/profile.service';
import { ActivatedRoute } from '@angular/router';

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
  sitterData: any = [];
  showContactButton: boolean = true;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sitterData = this.profileService.getAdData();

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
