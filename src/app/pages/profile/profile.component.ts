import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Ad } from '../../core/models/ad-model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ads: Ad[] = [];
  requests: Ad[] = [];

}
