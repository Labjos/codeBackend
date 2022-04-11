
// CODEBACKEND

This is a code verification project carried out with severals technologies.
remember npm install, to start

// Installation

Node JS
npm
Express
TS
Swaggers
Mongoose

// Dev Dependencies, please check Package.json  

"@types/express"
We use express as server on port 8000

"@types/jest"
test tool

"@types/node"
"@typescript-eslint/eslint-plugin"
"@typescript-eslint/parser"

dependencies to use typescript in our project

"concurrently"
concurrently, allows us to carry out processes simultaneously

"eslint"
"eslint-config-standard"
"eslint-plugin-import"
"eslint-plugin-node":
"eslint-plugin-promise":

It allows us to configure the rules to follow in this project

"jest"
Test 

"nodemon"
permanent update of our changes

"serve"
"supertest"
"ts-jest"
"ts-node"
"typescript"

"webpack"
"webpack-cli"
"webpack-node-externals"
"webpack-shell-plugin"

// scripts. you will find all the scripts in the package.json

*"build": "npx tsc",
*"start": "node dist/index.js",
*"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"",
*"test": "jest",
*"serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"

you can find more information in: https://github.com/Labjos/codeBackend
