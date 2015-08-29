'use strict';

import angular from 'angular';
import ngMessage from 'angular-messages';

console.log(angular.version);

let APP_NAME = 'app';

const app = angular.module(APP_NAME, [ngMessage]);

export default app;

