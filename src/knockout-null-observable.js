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
