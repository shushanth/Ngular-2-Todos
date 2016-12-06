"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//main module
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log('bootstrap of app sucees'); })
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=main.js.map