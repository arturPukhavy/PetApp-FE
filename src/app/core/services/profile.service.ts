import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    private isAvailable: boolean = false;
    private adData: any = {};
  
    setAvailability(value: boolean) {
      this.isAvailable = value;
    }
  
    getAvailability(): boolean {
      return this.isAvailable;
    }

    setAdData(data: any) {
      this.adData = data;
    }
  
    getAdData() {
      return this.adData;
    }
  }