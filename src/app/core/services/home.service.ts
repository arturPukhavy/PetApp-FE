import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class HomeService {
    private showSitterSubject = new BehaviorSubject<boolean>(true); // Default to showing sitters
  
    showSitter$ = this.showSitterSubject.asObservable();
  
    toggleDisplay() {
      this.showSitterSubject.next(!this.showSitterSubject.value);
    }
  }