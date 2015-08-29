'use strict';

import angular from 'angular';
import ngMessage from 'angular-messages';
import odd from './directives/odd';
import prime from './directives/prime';
//import uiRouter from 'angular-ui-router';

console.log(angular.version);

let APP_NAME = 'app';

const app = 
  angular.module(APP_NAME, [ngMessage])
    .directive("odd", odd)
    .directive("prime", ['$q','$timeout', prime]);    

export default app;

