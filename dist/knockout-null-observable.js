(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['knockout'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('knockout'));
  } else {
    root.ko = factory(root.ko);
  }
}(this, function(ko) {
ko.nullObservable = function(initialValue){
    var obsv = ko.observable(initialValue);
    return ko.computed({
        read: obsv,
        write: function(newValue) {
            if (newValue === '') {
                newValue = null;
            }
            obsv(newValue);
        }
    })
}

return ko;
}));
