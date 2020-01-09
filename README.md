Spike - Adding Angular to AngularJS project

1. Add Angular packages:

npm i @angular/common@4.3.0 @angular/compiler@4.3.0 @angular/core@4.3.0 @angular/forms@4.3.0 @angular/platform-browser@4.3.0 @angular/platform-browser-dynamic@4.3.0 @angular/router@4.3.0 @angular/upgrade@4.3.0 rxjs@5.0.1 zone.js@0.8.14 --save-exact

2. Add shims that angular uses:
npm i core-js@2.4.1 rxjs@5.0.1 zone.js@0.8.14 --save-exact

3. Add dev webpack and angular packages and other dev dependencies - use webpack version 3

npm i -D @angular/compiler-cli@8.2.14 @ngtools/webpack@1.5.5 @types/angular @types/core-js@0.9.42 @types/node@6.0.45 angular2-template-loader@0.6.2 awesome-typescript-loader@3.0.8 html-loader@0.4.5 html-webpack-plugin@2.28.0 http-server null-loader@0.1.1 raw-loader@0.5.1 rimraf@2.5.4 typescript@2.3.4 webpack@3.3.0 webpack-bundle-analyzer@2.8.3 cpx@1.5.0 css-loader --save-exact

And for serving the bundled content:
npm install http-server -g

npm install css-loader style-loader --save-dev


4. Change templateUrl from full to relative path. Fo instance:
templateUrl: './view2.html'

5. Change global vars from to:
app.config(...) -> angular.module('app').config

6. Add module and moduleResolution in tsconfig,json
    "module": "commonjs",
    "moduleResolution": "node",

6. Add index.ts with imports of all the js files imported in index.html

4. Create config/webpack.dev.js, config/helpers.js and config/index.html



















https://code.angularjs.org/1.5.0/docs/guide/component