import { Component, inject, input, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

//Router
import { Router } from "@angular/router";

//Preferences Service
import { UserPreferencesService } from "../../../src/app/core/services/user-preferences.service";
import { userPreferencesRequest } from '../../../src/app/core/models/user-preferences.models';

@Component({
  selector: 'app-user-preferences',
  imports: [ReactiveFormsModule],
  templateUrl: './user-preferences.html',
  styleUrl: './user-preferences.css',
})
export class UserPreferences {

  preferences = input<userPreferencesRequest | null>(null);

  private router = inject(Router);
  private preferencesApi = inject(UserPreferencesService);

  private fb = inject(FormBuilder);

  isSubmitting = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  preferencesForm = this.fb.nonNullable.group({
    nickname: ['', [Validators.required]],
    tone: ['', [Validators.required]],
    language: ['', [Validators.required]]
  })

  onSubmit() : void {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.preferencesForm.invalid) {
      this.preferencesForm.markAllAsTouched();
      return;
    }

    console.log("Form is valid, initiatind preferences request...");

    this.isSubmitting.set(true);

    this.preferencesApi.setPreferences(this.preferencesForm.getRawValue())
      .pipe(
        finalize(() => {
          this.isSubmitting.set(false);
          console.log("Request terminated");
        })
      )
      .subscribe({
        next : (response) => {
          console.log("API response: ", response);
          this.successMessage.set("Preferencias configuradas");
          this.preferencesForm.reset();
        },
        error : (error) => {
          console.error("Error setting preferences: ", error);
          this.errorMessage.set("Error configurando preferencias");
        },
        complete : () => {
          this.isSubmitting.set(false);
        }
      })
  }

}
