var createCounter = function(init) {
    var value = init;

    var counter = {
        increment: function() {
            value++;
            return value;
        },
        decrement: function() {
            value--;
            return value;
        },
        reset: function() {
            value = init;
            return value;
        }
    };
    return counter;
};

