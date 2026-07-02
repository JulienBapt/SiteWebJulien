import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideClientHydration(withNoIncrementalHydration()),
    provideHttpClient(withFetch()),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: false,
        disableImageLazyLoadWarning: false,
      },
    },
  ],
};
