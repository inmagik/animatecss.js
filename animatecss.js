(function(){




var vendors = ["-moz-", "-o-", "-webkit-", "-ms-"];
$.fn.vendorCss = function(propertyName, value) {

    for(var i=0;i<vendors.length;i++){
        this.css( vendors[i]+propertyName, value );    
    }
    //unprefixed version
    this.css(propertyName, value)
    return this;
};


$.fn.animationDuration = function(duration) {
    this.vendorCss( "animation-duration", duration );
    return this;
};


$.fn.animateWithClass = function(cls, options){
    console.error(1, cls, options)
    options = options || {};
    if(options.duration){
        this.animationDuration(options.duration);
    }
    if (options.enter){
        this.removeClass("hide");
    }
    
    this.addClass("animated " + cls);
    var t = this;

    var promise = new Promise(function(resolve, reject) {
      //#TODO: CHANGE 10000 ...
      var x = setTimeout(function(){
        reject(Error("It broke: "+ cls));
      }, 10000);
      t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
        function(){
            t.removeClass("animated "+cls);
            if (options.exit){
               t.addClass("hide");
            }
            clearTimeout(x);
            resolve("true");
        }
      );
      
    });

    return promise;

}




})();