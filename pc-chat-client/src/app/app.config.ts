import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';

import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes), 
      provideAnimations(),
      provideToastr({
        positionClass: 'toast-top-right',
        easeTime: 500,
        timeOut: 3000,
        closeButton: true,
      })
  ]
};
