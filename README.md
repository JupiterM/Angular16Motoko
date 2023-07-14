# Angular16 Motoko

Welcome to the Angular16 Motoko Github repo! 
This repository is made to be a plug-and-play solution for using Angular16 as an ICP smart contract canister front-end with Motoko as the canister back-end. 

## Quickstart
run git clone 'https://github.com/JupiterM/Angular16Motoko'.
cd Angular16Motoko.
run 'npm install -y'. 
run 'npm run deploy:local'.

ZoneAware promise returns value in console. Only there to demostrate connectivity. Will be changed later.

## Deploy on IC Network
Just change values in 'canister_ids.json' to your own.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server
Angular is meant to be run as a front-end canister, so 'ng serve' is not preferred. Use 'npm run deploy:local' instead.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Instead of using `ng build` to build the project, use either 'npm run deploy:local' or 'npm run deploy:dfx'

## Running unit tests

No additional testing has been created yet. 
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
And remember...the power of the Internet Computer is inside you!
