# AngularBootstrapFontawesome

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


TOTURIALS 

# Step 1:
Create Project

ng new angular-bootstrap-fontawesome --style=scss  --routing

# Step 2:
Install Boostrap 5 and fontawesome 4.7 
npm i --save bootstrap@next font-awesome

# Step 3 :
Edit angular.json file to get boostrap + fontawesome (css and javascript)

# THIS IS FOR BOOSTRAP version 5 and fontawesome version 4.7
# Other vession may have different path

CSS :
"node_modules/bootstrap/dist/css/bootstrap.css",
"node_modules/font-awesome/css/font-awesome.css",
"src/styles.scss"

Javascript:
"node_modules/bootstrap/dist/js/bootstrap.bundle.js"

We should add fontawesome's fonts to our assets and create @font-face for them

You can download from from fontawesome website

Step 4 : Create _fonts.scss to hold all our fonts
@font-face {
  font-family: 'FontAwesome';
  src: url('^assets/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('^assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), 
  url('^assets/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
  url('^assets/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),
  url('^assets/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), 
  url('^assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
}

Add to our main styles.scss 


STep 5: We can add some custom fonts into our project ( use google font)

Get all fonts we need in a folder and use https://transfonter.org/


font-family: 'JetBrains Mono', monospace;
font-family: 'Lato', sans-serif;
font-family: 'Roboto', sans-serif;

== Let TEST our application ===

You should have font and icon work 