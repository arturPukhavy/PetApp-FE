import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  selectedType = '';
  selectedBreed = '';
  ageMin: number | null = null;
  ageMax: number | null = null;
  findSitter = true;

  constructor() { }

  ngOnInit() {}

  applyFilters(event: Event) {
    event.preventDefault();
  }

}
