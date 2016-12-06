import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//main module

import {AppModule} from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
                        .then((success)=>console.log('bootstrap of app sucees'))
                        .catch((error)=>console.error(error));