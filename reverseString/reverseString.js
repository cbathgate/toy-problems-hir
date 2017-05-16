var reverseString = function(str, sep) {
  sep = sep || '';
  var stringArray = str.split(sep);
  for (var i = 0; i < ((stringArray.length - 1) / 2); i++) {
    var temp = stringArray[i];
    stringArray[i] = stringArray[(stringArray.length - 1) - i];
    stringArray[(stringArray.length - 1) - i] = temp;
  }

  return stringArray.join(sep);
}

reverseString('california is the best', ' ');