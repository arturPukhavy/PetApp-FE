import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  signInWithGoogle() {
    // Implement Google Sign-In logic here
    // For example, using Firebase Auth or Google APIs
    console.log('Sign in with Google');
    // After successful sign-in, redirect to home
    this.router.navigate(['/home']);
  }

}
