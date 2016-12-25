import './polyfills';
import './vendors'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MovieAppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(MovieAppModule);
