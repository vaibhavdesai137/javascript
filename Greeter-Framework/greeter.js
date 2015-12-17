// dummy semicolon in case some other libraries did not end their code correctly
;(function (global, $) {
        
    // wrapper for "new"
    var Greeter = function(fname, lname, lang) {
        return new Greeter.init(fname, lname, lang);
    }
    
    // accessible only here in our library
    var supportedLangs = ["en", "es"];
    var informalGreetings = {
        en: "Hello",
        es: "Hola"
    };
    var formalGreetings = {
        en: "Greeting",
        es: "Saludos"
    };
    var logMsgs = {
        en: "Logged in",
        es: "Inicio sesion"
    }
    
    // methods exposed by our library
    Greeter.prototype = {
        
        fullName: function() {
            return this.fname + ' ' + this.lname;
        },
        
        validateLang: function() {
            if (supportedLangs.indexOf(this.lang) === -1) {
                return -1;
            }
            return 1;
        },
        
        informalGreeting: function() {
            return informalGreetings[this.lang] + ' ' + this.fname + '!!!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.lang] + ' ' + this.fullName();
        },
        
        greet: function(formal) {
            var msg;
            
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.informalGreeting();
            }
            
            if (console) {
                console.log(msg);
            }
            
            // to make the method chainable
            return this;
        },
        
        log: function() {
            
            if (console) {
                console.log(logMsgs[this.lang] + ' ' + this.fullName());
            }
            
            // make chainable
            return this;
        },
        
        // to update lang on the fly
        setLang: function(newLang) {
            
            if (this.validateLang(newLang)) {
                this.lang = newLang;
            } else {
                throw "Invalid language";
            }
            
            // make chainable
            return this;
        },
        
        useJQuery: function(selector, formal) {
            
            if (!$) {
                throw "No jQuery";
            }
            
            if (!selector) {
                throw "No selector";
            }
            
            var msg;
            if (formal) {
                msg = this.formalGreeting();    
            } else {
                msg = this.informalGreeting();
            }
            
            // update html
            $("#" + selector).html(this.informalGreeting());
            
            // make chainable
            return this;
        }
    };
    
    // fn constructor
    Greeter.init = function(fname, lname, lang) {
        
        var self = this;
        self.fname = fname || " ";
        self.lname = lname || " ";
        self.lang = lang || "en";
        
        if (!this.validateLang(lang)) {
            throw "Lang not supported";
        }
        
    }
    
    // trick from jQuery to not use the "new" keyword
    Greeter.init.prototype = Greeter.prototype;
    
    // make our awesome library accessible at global level
    global.Greeter = global.G$ = Greeter;
    
}(window, jQuery));

