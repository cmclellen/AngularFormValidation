'use strict';

import angular from 'angular';
import ngMessage from 'angular-messages';
//import uiRouter from 'angular-ui-router';

console.log(angular.version);

let APP_NAME = 'app';

const app = angular.module(APP_NAME, [ngMessage]);

export default app;

