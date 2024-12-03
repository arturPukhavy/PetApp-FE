import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
    private isAvailable: boolean = false;
    private adData: any = {};
    private sitters: Array<{ name: string; description: string; rate: number; photoUrl: string; available: boolean }> = [
      { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
      { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: false },
      // Add more sitters as needed
    ];
    private availableSitters: Array<{ name: string; description: string; rate: number; photoUrl: string; available: boolean }> = [
      { name: 'Alice', description: 'Loving and experienced sitter.', rate: 20, photoUrl: 'path/to/alice.jpg', available: true },
      { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
      { name: 'Bob', description: 'Available for weekend stays.', rate: 25, photoUrl: 'path/to/bob.jpg', available: true },
      // Add more sitters as needed
    ];

    private owners: Array<{ name: string; description: string; ownerName: string; photoUrl: string; available: boolean }> = [
      { name: 'Rex', description: 'A friendly golden retriever.', ownerName: 'John', photoUrl: 'path/to/rex.jpg', available: false },     
      { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },     
      { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: false },
      // Add more sitters as needed
    ];
    private availableOwners: Array<{ name: string; description: string; ownerName: string; photoUrl: string; available: boolean }> = [
      { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
      { name: 'Mittens', description: 'Loves to play and cuddle!', ownerName: 'Sarah', photoUrl: 'path/to/mittens.jpg', available: true },
      // Add more sitters as needed
    ];



  // BehaviorSubjects to track sitters and available sitters
  private sittersSubject = new BehaviorSubject(this.sitters);
  sitters$ = this.sittersSubject.asObservable();

  private availableSittersSubject = new BehaviorSubject(this.availableSitters.filter(s => s.available));
  availableSitters$ = this.availableSittersSubject.asObservable();

  private ownersSubject = new BehaviorSubject(this.owners);
  owners$ = this.ownersSubject.asObservable();

  private availableOwnersSubject = new BehaviorSubject(this.availableOwners.filter(s => s.available));
  availableOwners$ = this.availableOwnersSubject.asObservable();

  // Method to add or update a sitter
  updateSitter(sitterData: { name: string; description: string; rate: number; photoUrl: string; available: boolean }) {
    const index = this.sitters.findIndex(s => s.name === sitterData.name);
    
    if (index !== -1) {
      this.sitters[index] = sitterData; // Update existing sitter
    } else {
      this.sitters.push(sitterData); // Add new sitter
    }

    this.sittersSubject.next(this.sitters);

    // Update available sitters
    if (sitterData.available) {
      if (!this.availableSitters.find(s => s.name === sitterData.name)) {
        this.availableSitters.push(sitterData); // Add to available list
      }
    } else {
      this.availableSitters = this.availableSitters.filter(s => s.name !== sitterData.name); // Remove from available list
    }

    this.availableSittersSubject.next(this.availableSitters); // Update available sitters observable
  }

  updateOwner(ownerData: { name: string; description: string; ownerName: string; photoUrl: string; available: boolean }) {
    const index = this.sitters.findIndex(s => s.name === ownerData.name);
    
    if (index !== -1) {
      this.owners[index] = ownerData; // Update existing owner
    } else {
      this.owners.push(ownerData); // Add new sitter
    }

    this.ownersSubject.next(this.owners);

    // Update available owners
    if (ownerData.available) {
      if (!this.availableOwners.find(s => s.name === ownerData.name)) {
        this.availableOwners.push(ownerData); // Add to available list
      }
    } else {
      this.availableOwners = this.availableOwners.filter(s => s.name !== ownerData.name); // Remove from available list
    }

    this.availableOwnersSubject.next(this.availableOwners); // Update available sitters observable
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

    // removeSitter(username: string) {
    //   const sitters = this.sittersSource.value.filter((sitter) => sitter.name !== username);
    //   this.sittersSource.next(sitters);
    
    //   const availableSitters = this.availableSittersSource.value.filter((sitter) => sitter.name !== username);
    //   this.availableSittersSource.next(availableSitters);
    // }
  }