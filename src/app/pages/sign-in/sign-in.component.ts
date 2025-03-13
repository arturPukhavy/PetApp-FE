import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormGroupName, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

const passwordMatchValidator = (form: FormGroup) => {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password && confirmPassword && password === confirmPassword ? null : { passwordMismatch: true };
};

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent  implements OnInit {
  authForm: FormGroup;
  isSignUp: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({}); // Initialize to avoid undefined errors
  }

  ngOnInit() {
    this.buildForm();
  }

  // Build form based on mode
  private buildForm() {
    const currentValues = this.authForm.value || { email: '', password: '', confirmPassword: '' };

    if (this.isSignUp) {
      this.authForm = this.fb.group(
        {
          email: [currentValues.email || '', [Validators.required, Validators.email]],
          password: [currentValues.password || '', [Validators.required]],
          confirmPassword: [currentValues.confirmPassword || '', [Validators.required]],
        },
        { validators: passwordMatchValidator }
      );
    } else {
      this.authForm = this.fb.group({
        email: [currentValues.email || '', [Validators.required, Validators.email]],
        password: [currentValues.password || '', [Validators.required]],
      });
    }
  }

  // Toggle between login and sign-up modes
  toggleMode(isSignUp: boolean) {
    this.isSignUp = isSignUp;
    this.buildForm();
  }

  // Form submission
  onSubmit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.authForm.value;
    if (this.isSignUp) {
      console.log('Sign Up:', { email, password });
    } else {
      console.log('Sign In:', { email, password });
    }
    this.router.navigate(['/home']);
  }

  // Google sign-in
  signInWithGoogle() {
    console.log('Sign in with Google');
    this.router.navigate(['/home']);
  }

}
