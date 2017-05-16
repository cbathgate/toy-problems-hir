var matchingParens = function(str, num) {

  var nests = 1;

  for (var i = num + 1; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      nests++;
    } else if (str.charAt(i) === ")") {
      nests--;
    }

    if (nests === 0) {
      return i;
    }
  }

  return null;
}

// var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
// var number = 28;

// matchingParens(string, number);