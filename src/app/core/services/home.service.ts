import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {
    private showSitterSubject = new BehaviorSubject<boolean>(true); // Default to showing sitters
    private filterDataSubject = new BehaviorSubject<{ type: string; filters: any }>({ type: 'sitters', filters: {} });

  showSitter$ = this.showSitterSubject.asObservable();
  filterData$ = this.filterDataSubject.asObservable();

  toggleDisplay() {
    this.showSitterSubject.next(!this.showSitterSubject.value);
  }

  updateFilters(type: string, filters: any) {
    this.filterDataSubject.next({ type, filters });
  }

  }