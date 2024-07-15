# Currency Exchange Project

Currency Exchange Project designed and developed by Hesham Eid Ali.


Run these commands in the terminal to run the app on your local environment

    git clone https://github.com/heshamelrefy/currency-exchange.git

    npm install --force

### Development server

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running scripts

To run linter and check the code over tslint rules simply run `yarn lint` or `npm run lint`

### Code scaffolding

Run `ng generate component component-name` to generate a new component. If you don't have `@angular/cli` as a global package on your system, you can run `npx ng generate component component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `yarn build:prod` or `npm run build:prod` to build the project.
The build artifacts will be stored in the `dist/` directory.

## App's Architecture

-   Used latest Angular CLI v17.3.5

-   Used code scaffolding for effective working and clean development environment. Specialized `build`, `deploy`, `lint`, `pre-commit` scripts added to package.json.

-   `lint-staged` script cleans and checks the `TypeScript`, `SCSS` codes before committing any changes to the repository. `prettier`, `stylelint` and `tslint` plugins run in this script.

-   Currency Exchange Project has 3 major components. Namely;s **`Core Component`** -_includes `Alert Component`, `Header Component`, `Not Found Component` -wildcard routing redirection component, 404 page-_, **`Converter Component`** and **`History Component`**.

-   Used `SCSS` as a CSS preprocessor to write efficient CSS codes.

-   Used new generation `JavaScript (ES6, ES7)` with `TypeScript`.

-   Used `Angular Services` for sharing app state and data-binding within injected components.

-   Used latest `Bootstrap v5.3.3` version to integrate powerful responsive design powered by CSS FlexBox model.

-   Used `semantic` HTML tags and elements with semantic class names.

-   Modular components created for reusing components elsewhere to improve modularity in the app.

-   Used `Interceptors` to simulate backend-less login functionality while using HTTP request. Integrated `JWT interceptor` to send `token` for necessary request when needed.

-   Used readonly private properties to prevent magic numbers and strings in the project where it needed into the methods.

-   Instead of using images for icons, font icons are integrated into the project with `Fontello` icon package. `Fontello` just includes preferred icons, this helps to balance the file size of the icon package. Created special CurrencyExchange logo SVG font-icon for the project from search font-icon.

-   The app has multiple icons for various Android, IOS devices.

-   App designed from scratch with the inspiration of the Google Material Design principles by the power of the `Angular Material`.

-   Modular components created for reusing components elsewhere to improve modularity in the app.

-   PWA integration has been made for the installation of the app to the devices which supports installation.


