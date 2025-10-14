import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { register } from 'swiper/element/bundle';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { construct, colorPalette, school } from 'ionicons/icons';

addIcons({
  construct,
  colorPalette,
  school
});

// ✅ Importation des icônes Ionicons
import { addIcons } from 'ionicons';
import { medkit, flash, flask } from 'ionicons/icons';

// ✅ Enregistrement des icônes AVANT le bootstrap
addIcons({
  medkit,
  flash,
  flask
});

// register Swiper custom elements
register();

// Call the element loader
defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
