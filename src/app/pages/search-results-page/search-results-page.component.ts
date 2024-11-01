import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pet } from '../../core/models/pet-model';

@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  pets: Pet[] = [];

}
