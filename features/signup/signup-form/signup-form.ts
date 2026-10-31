import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

//AuthService
import { AuthService } from '../../../src/app/core/services/auth.service';

// Icons
import { LucideCircleCheck , LucideMail, LucidePhone, LucideLock } from "@lucide/angular";

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule, LucideCircleCheck, LucideMail, LucidePhone, LucideLock],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignUpForm {

  private fb = inject(FormBuilder);
  private authApi = inject(AuthService);

  isSubmitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  signUpForm = this.fb.nonNullable.group({
    code: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  onSubmit() : void {

    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    console.log("Form is valid:", true, "Initiating register request...");

    this.isSubmitting.set(true);

    this.authApi.signUp(this.signUpForm.getRawValue())
      .pipe(
        finalize(() => {
          this.isSubmitting.set(false);
          console.log("Request terminated.");
        })
      )
      .subscribe({
        next: (response) => {
          console.log("API response: ", response);
          this.successMessage.set('Solicitud de registro enviada correctamente.');
          this.signUpForm.reset();
        },
        error: (error) => {
          console.error("Error at register: ", error);
          this.errorMessage.set('No fue posible completar el registro. Inténtalo nuevamente.');
        },
        complete: () => {
          this.isSubmitting.set(false);
        }
      });
  }

}
