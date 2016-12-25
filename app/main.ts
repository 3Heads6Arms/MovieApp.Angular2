import './polyfills';
import './vendors';
import 'hammerjs';
import './app.theme.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MovieAppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(MovieAppModule); 
