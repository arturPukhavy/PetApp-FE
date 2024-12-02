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

  applyFilters(data: any[], filters: any): any[] {
    return data.filter(item => {
      if (filters.type && item.type !== filters.type) return false;
      if (filters.breed && item.breed && !item.breed.toLowerCase().includes(filters.breed.toLowerCase())) return false;
      if (filters.ageMin && item.age < filters.ageMin) return false;
      if (filters.ageMax && item.age > filters.ageMax) return false;
      if (filters.price && item.rate > +filters.price) return false;
      if (filters.location && item.location && !item.location.toLowerCase().includes(filters.location.toLowerCase()))
        return false;
      if (filters.dateFrom && new Date(item.date) < new Date(filters.dateFrom)) return false;
      if (filters.dateTo && new Date(item.date) > new Date(filters.dateTo)) return false;
      return true;
    });
  }
  }