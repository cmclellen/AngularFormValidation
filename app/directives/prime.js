'use strict';

export default function($q, $timeout) {

  var isPrime = function(n) {
      if (n < 2) { 
        return false; 
      }
 
      for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    };

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, element, attr, ngModel) {
      ngModel.$asyncValidators.prime = function(modelValue) {
        var defer = $q.defer();
        $timeout(function() {
          if(isPrime(modelValue)) {
            defer.resolve();
          } else{
            defer.reject();
          }
        }, 1500);        
        return defer.promise;
      }
    }
  };

}