module.exports = {
  cloneOnlyWith: function(obj, attributes) {
    var newObj = {};
    for(var key in obj) {
      if(attributes.indexOf(key) !== -1) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
};
