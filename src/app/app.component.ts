import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FiltersComponent } from "./pages/filters/filters.component";
import { PetDetailsComponent } from "./pages/pet-details/pet-details.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchResultsPageComponent } from "./pages/search-results-page/search-results-page.component";
import { IonAccordion, IonAccordionGroup, IonicModule, Platform } from '@ionic/angular';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, FiltersComponent, SearchResultsPageComponent,IonicModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PetApp';
  isNative: boolean;

  constructor(private platform: Platform) {
    this.isNative = this.platform.is('capacitor');
  }
}
