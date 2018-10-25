(function(global, $) {

    var Greeter = function(firstname, lastname, language) {
        return new Greeter.init(firstname, lastname, language); // this will return an object which will have __proto__ as greeter.init.prototype
    }

    var supportedLangs = ["en", "es"];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: "Logged in",
        es: "inició sesión"
    } // these variable are created bcoz they cant be accessed by outside source

    Greeter.prototype = {
        
        fullname: function() {
            return this.firstname+" "+this.lastname;
        },

        validate: function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language]+" "+this.firstname+"!";
        },

        formalGreetings: function() {
            return formalGreetings[this.language]+", "+this.fullname();
        },

        greet: function(formal) {
            var msg;

            // if defined or null it will be coerced to false
            if(formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greeting();
            }

            if(console) {
                console.log(msg);
            }

            // "this" refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language]+": "+this.fullname());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery is missing';
            }

            if(!selector) {
                throw "Missing jQuery selector";
            }

            var msg;
            if(formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }

        
    };

    Greeter.init = function(firstname, lastname, language) {
        var self = this; // saving this in a var so that i dont have any problem in near future
        self.firstname = firstname||"";
        self.lastname = lastname||"";
        self.language = language||"en";

        self.validate(); // to check if the language enter is correct or not
    }

    Greeter.init.prototype = Greeter.prototype; // this is used to put prototype of init to Greeter

    global.Greeter = global.G$ = Greeter; // so that it will be accesible to the outside world

}(window, jQuery));