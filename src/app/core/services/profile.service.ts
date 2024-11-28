import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    private isAvailable: boolean = false;
  
    setAvailability(value: boolean) {
      this.isAvailable = value;
    }
  
    getAvailability(): boolean {
      return this.isAvailable;
    }
  }