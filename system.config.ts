declare var System:any;

System.config({

  paths:{
    'npmModulesAlias:':'node_modules/'
  },

  map:{
    'app':'app',
    'main':'app/main.js',

    '@angular/core': 'npmModulesAlias:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npmModulesAlias:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npmModulesAlias:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npmModulesAlias:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npmModulesAlias:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/forms': 'npmModulesAlias:@angular/forms/bundles/forms.umd.js',

    'rxjs':'npmModulesAlias:rxjs',
    'angular-in-memory-web-api': 'npmModulesAlias:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
  },

  packages:{
    'app':{main:'./main.js','defaultExtension':'js'},
    'api':{'defaultExtension':'js'},
    'rxjs':{'defaultExtension':'js'}
  }

});

