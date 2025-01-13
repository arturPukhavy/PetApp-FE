# PetApp
[![PetApp-FE (CD)](https://github.com/arturPukhavy/PetApp-FE/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/arturPukhavy/PetApp-FE/actions/workflows/npm-gulp.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## API

The API has been designed to meet the needs of the service. Additionally, an Open API specification has been created and is available here: https://app.swaggerhub.com/apis/ARTURPUHICE_1/Pet_App_API/1.0.0

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Android

**Install Android Studio**
Install latest version from Android Studio [website](https://developer.android.com/studio).

**Install dependencies**:
```bash
npm install
```

**Build the Angular application**:
```bash
ng build --configuration production
```
or simple:
```bash
ng build
```

**Synchronize Capacitor with the Android project**:
```bash
npx cap sync android
```

**Open the Android project**:
```bash
npx cap open android
```
