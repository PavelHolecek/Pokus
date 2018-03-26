// cow.js
(function(exports) {
    "use strict";
  
    var counter = 0;
    function Cow(name) {
      this.name = name || "Anon cow";
    }
    exports.Cow = Cow;  

    Cow.prototype = {
      greets: function(target) {
        if (!target)
          throw new Error("missing target");
          ++counter;
        return this.name + " greets " + target;
      }
    };

    
  })(this);