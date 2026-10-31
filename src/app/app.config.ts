import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideAppInitializer, inject } from '@angular/core';
import { firstValueFrom } from "rxjs";
import { provideRouter } from '@angular/router';

import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

//Authentication
import { AuthStateService } from "./core/services/authstate.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay()),
    //Providers In Use
    provideHttpClient(),
    provideRouter(routes),
    provideAppInitializer(() => {
      const authState = inject(AuthStateService);
      return firstValueFrom(authState.initialize());
    })
  ]
};
