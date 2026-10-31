import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

//Router
import { Router } from "@angular/router";

//AuthService and AuthStateService
import { AuthService } from "../../../src/app/core/services/auth.service";
import { AuthStateService } from "../../../src/app/core/services/authstate.service";

//Icons
import { LucideMail, LucideLock } from "@lucide/angular";

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, LucideMail, LucideLock],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  //Dependencies injection
  private router = inject(Router);
  private authState = inject(AuthStateService);

  private fb = inject(FormBuilder);
  private authApi = inject(AuthService);

  isSubmitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  signInForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  onSubmit() : void {

    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    console.log("Form is valid:", true, "Initiating login request...");

    this.isSubmitting.set(true);

    this.authApi.signIn(this.signInForm.getRawValue())
      .pipe(
        finalize(() => {
          this.isSubmitting.set(false);
          console.log("Request terminated");
        })
      )
      .subscribe({
        next : (response) => {
          console.log("Api Response: ", response);
          this.successMessage.set("Inicio de sesión exitoso");
          this.authState.setUser(response.user);
          this.signInForm.reset();
          this.router.navigate(["/dashboard"]);
        },
        error : (error) => {
          console.error("Error trying to sign in: ", error);
          this.errorMessage.set("Error al iniciar sesión");
        },
        complete : () => {
          this.isSubmitting.set(false);
        }
      })

  }

}
