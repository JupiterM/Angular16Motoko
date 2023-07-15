# Easy Angular16 Motoko

Welcome to the Easy Angular16 Motoko Github repo! 
This repository is made to be a plug-and-play solution for using Angular16 as an ICP smart contract canister front-end with Motoko as the canister back-end.
This project uses Angular version 16.1.3 and DFX version 0.14.2.

## Quickstart
run git clone 'https://github.com/JupiterM/Angular16Motoko'. <br />
cd Angular16Motoko. <br />
run 'npm install -y'. <br />
run 'npm run deploy:local'. 

ZoneAware promise returns value in console. Only there to demostrate connectivity. Will be changed later.

## Deploy on IC Network
Just change values in 'canister_ids.json' to your own. <br />
run 'npm run deploy:ic'

## Development server
Angular is meant to be run as a front-end canister, so 'ng serve' is not preferred. <br />
Use 'npm run deploy:local' instead.

## Code scaffolding
Components and services can be created the same.


## Building Angular Application

Instead of using `ng build` to build the project, <br />
use either: <br />
'npm run deploy:local' for a local deployment or <br />
'npm run deploy:ic' for a mainnet deployment

## Running unit and end-to-end tests

No additional testing has been created yet. There is only a ZoneAwarePromise which returns the value from a 'greet' function in the console to verify connectivity.

## Further Help
Check out the Dfinity forums for further help...if you dare!! 