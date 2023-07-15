# Easy Angular16 Motoko

Welcome to the Easy Angular16 Motoko Github repo! 
This repository is made to be a plug-and-play solution for using Angular16 as an ICP smart contract canister front-end with Motoko as the canister back-end. 
This project uses Angular version 16.1.3. and DFX version 0.14.2.


## Quickstart
run git clone 'https://github.com/JupiterM/Angular16Motoko'.
cd Angular16Motoko.
run 'npm install -y'. 
run 'npm run deploy:local'.

ZoneAware promise returns value in console. Only there to demostrate connectivity. Will be changed later.

## Deploy on IC Network
Just change values in 'canister_ids.json' to your own.
run 'npm run deploy:ic'
 

## Development server
Angular is meant to be run as a front-end canister, so 'ng serve' is not preferred. Use 'npm run deploy:local' instead.

## Code scaffolding
Can generate components and services the same. Need to import { MotokoService } and instantiate service before using.

## Build

Instead of using `ng build` to build the project, use either 'npm run deploy:local' or 'npm run deploy:ic'

## Running unit and end-to-endtests

No additional testing has been created yet. There is only a ZoneAwarePromise to verify connectivity to back-end canister.


