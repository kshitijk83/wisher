(function(global, $) {

    var Greeter = function(firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language); // this will return an object which will have __proto__ as greeter.init.prototype
    }

    Greeter.prototype = {};

    Greeter.init = function(firstname, lastname, language) {
        var self = this; // saving this in a var so that i dont have any problem in near future
        self.firstname = firstname||"";
        self.lastname = lastname||"";
        self.language = language||"en";
    }

    Greeter.init.prototype = Greeter.prototype; // this is used to put prototype of init to Greeter

    global.Greeter = global.G$ = Greeter; // so that it will be accesible to the outside world

}(window, jQuery));