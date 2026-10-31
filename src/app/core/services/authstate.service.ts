import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//User Model
import { authUser } from '../models/auth.models';

 //Authentication Service
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {


  private authApi = inject(AuthService);
  private currentUser = signal<authUser | null>(null);

  readonly user = this.currentUser.asReadonly();

  setUser(user: authUser): void {
    this.currentUser.set(user);
  }

  clearUser(): void {
    this.currentUser.set(null);
  }

  logout() : Observable<void> {
    return this.authApi.logout().pipe(
        tap(() => {
            this.clearUser();
        })
    );
  }

  initialize() : Observable<void> {
    return this.authApi.getCurrentUser().pipe(
        tap (user => {
            this.currentUser.set(user);
        }),

        map (() => undefined),
        catchError(error => {
            this.currentUser.set(null);

            if (error.status !== 401) {
                console.error("Error recovering authentication: ", error);
            }

            return of(undefined);

        })
    )
  }
}