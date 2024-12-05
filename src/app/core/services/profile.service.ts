import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    private isAvailable: boolean = false;
    private adData: any = {};

    private isCheckedSubject = new BehaviorSubject<boolean>(false);
    isChecked$ = this.isCheckedSubject.asObservable();

    private sitters: Array<{ name: string; description: string; rate: number; photoUrl: string; available: boolean }> = [
      { name: 'Ev', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
      { name: 'Asd', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
      // Add more sitters as needed
    ];
    private availableSitters: Array<{ name: string; description: string; rate: number; photoUrl: string; available: boolean }> = [
      { name: 'Alice', description: 'Loving and experienced sitter.', rate: 20, photoUrl: 'path/to/alice.jpg', available: true },
      { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
      { name: 'Mark', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
      // Add more sitters as needed
    ];

    private owners: Array<{ name: string; description: string; ownerName: string; photoUrl: string; available: boolean }> = [
      { name: 'Rex', description: 'A friendly golden retriever.', ownerName: 'John', photoUrl: 'path/to/rex.jpg', available: false },     
      { name: 'Mitten', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },     
      { name: 'Mitt', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },
      // Add more sitters as needed
    ];
    private availableOwners: Array<{ name: string; description: string; ownerName: string; photoUrl: string; available: boolean }> = [
      { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
      { name: 'Mit', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
      // Add more sitters as needed
    ];

    private adDataSubject = new BehaviorSubject<any>({
      petPhoto: '',
      petName: '',
      name: '',
      location: '',
      petType: '',
      petDescription: '',
      bookingDateFrom: '',
      bookingDateTo: '',
      payment: 0,
    });

    adData$ = this.adDataSubject.asObservable();

  // BehaviorSubjects to track sitters and available sitters
  private sittersSubject = new BehaviorSubject(this.sitters);
  sitters$ = this.sittersSubject.asObservable();

  private availableSittersSubject = new BehaviorSubject(this.availableSitters);
  availableSitters$ = this.availableSittersSubject.asObservable();

  private ownersSubject = new BehaviorSubject(this.owners);
  owners$ = this.ownersSubject.asObservable();

  private availableOwnersSubject = new BehaviorSubject(this.availableOwners);
  availableOwners$ = this.availableOwnersSubject.asObservable();

  // Method to add or update a sitter
  updateSitter(sitterData: { name: string; description: string; rate: number; photoUrl: string; available: boolean }) {
    const index = this.sitters.findIndex((s) => s.name === sitterData.name);

    if (index !== -1) {
      this.sitters[index] = sitterData; // Update existing
    } else {
      this.sitters.push(sitterData); // Add new sitter
    }

    this.sitters = [...new Set(this.sitters)]; // Deduplicate sitters
    this.sittersSubject.next(this.sitters);

    // Handle available sitters
    if (sitterData.available) {
      const availableIndex = this.availableSitters.findIndex((s) => s.name === sitterData.name);
      if (availableIndex === -1) {
        this.availableSitters.push(sitterData);
      }
    } else {
      this.availableSitters = this.availableSitters.filter((s) => s.name !== sitterData.name);
    }

    this.availableSittersSubject.next([...new Set(this.availableSitters)]);
  }

  updateOwner(ownerData: { name: string; description: string; ownerName: string; photoUrl: string; available: boolean }) {
    // Find the index of the owner in the main `owners` list
    const index = this.owners.findIndex((o) => o.name === ownerData.name);
  
    if (index !== -1) {
      // Update existing owner
      this.owners[index] = ownerData;
    } else {
      // Add new owner
      this.owners.push(ownerData);
    }
  
    // Deduplicate the main `owners` list
    this.owners = [...new Map(this.owners.map((o) => [o.name, o])).values()];
    this.ownersSubject.next(this.owners);
  
    // Handle `availableOwners` list
    if (ownerData.available) {
      const availableIndex = this.availableOwners.findIndex((o) => o.name === ownerData.name);
      if (availableIndex === -1) {
        this.availableOwners.push(ownerData); // Add to `availableOwners` if not already present
      } else {
        this.availableOwners[availableIndex] = ownerData; // Update existing entry
      }
    } else {
      // Remove from `availableOwners` if marked unavailable
      this.availableOwners = this.availableOwners.filter((o) => o.name !== ownerData.name);
    }
  
    // Deduplicate the `availableOwners` list
    this.availableOwners = [...new Map(this.availableOwners.map((o) => [o.name, o])).values()];
    this.availableOwnersSubject.next(this.availableOwners);
  }
  
    
  
    getAvailability(): boolean {
      return this.isAvailable;
    }

    setAdData(data: any) {
      this.adData = data;
      this.adDataSubject.next(data);
      
    }
  
    getAdData() {
      return this.adDataSubject.value;
    }

    setChecked(checked: boolean) {
      this.isCheckedSubject.next(checked);
    }

  }