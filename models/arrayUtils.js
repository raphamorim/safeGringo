module.exports = {
  // Remove duplicates from array
  // PS.: Does not work when the array have objects
  // PS2.: Numbers are converted to strings
  uniq: function(array) {
    var newArray = [];
    var terms = {};
    for(var i in array) {
      var e = array[i];
      if(!terms[e]) {
        newArray.push(e);
        terms[e] = true;
      }
    }
    return newArray;
  }
};
