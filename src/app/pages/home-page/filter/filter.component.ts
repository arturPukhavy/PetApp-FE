import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeService } from '../../../core/services/home.service';

@Component({
    imports: [RouterModule, CommonModule, FormsModule],
    standalone: true,
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedType = '';
  selectedBreed = '';
  ageMin: number | null = null;
  ageMax: number | null = null;
  sitterFilter = true;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.showSitter$.subscribe(showSitter => {
      this.sitterFilter = showSitter;
    });
  }

  applyFilters(event: Event) {
    event.preventDefault();
  }

}
