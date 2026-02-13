import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  hasError = signal(false);
  isPosting = signal(false);

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.showError();
      return;
    }

    const { fullName = '', email = '', password = '' } = this.registerForm.value;

    this.isPosting.set(true);

    this.authService.register(fullName!, email!, password!).subscribe((ok) => {
      this.isPosting.set(false);

      if (ok) {
        this.router.navigateByUrl('/');
        return;
      }

      this.showError();
    });
  }

  private showError() {
    this.hasError.set(true);
    setTimeout(() => this.hasError.set(false), 2000);
  }
}
