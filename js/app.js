var app = angular.module('customFilters', []);

app.filter('kebab', function () {
  return function (input) {
    if (isNaN(input)) {
      return input.replace(/_/g, '-');
    } else { return input; }
  };
});

app.filter('camel', function () {
  return function (input) {
    if (input.indexOf('_') !== -1 || input.indexOf('-') !== -1) {
      var letter = input.indexOf('_') + 1;
      var string = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i] === '_' || input[i] === '-') {
          i++;
          string.push(input[i].toUpperCase());
        } else {string.push(input[i]);}
      }
      return string.join('');
    }
  };
});

app.filter('piglatin', function () {
  return function (input) {
    var array = input.split(' ');
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var ministring = [];
      for (var j = 1; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
      newArray.push(array[i][0]);
      newArray.push('ay ');
    }
    return newArray.join('');
  };
});

app.filter('redact', function () {
  return function (input, word) {
    return input.replace(RegExp(word), 'REDACTED');
  };
});
