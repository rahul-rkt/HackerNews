define(function() {

  /*
  
  module:     contentHandler
  usage:      handles behaviour of components in the content
  author:     R
   */
  "use strict";
  return {
    init: function() {
      $(".server-response").on("click", "a", function(event) {
        var parent;
        parent = $(this).parent();
        if (parent.hasClass("errors")) {
          event.preventDefault();
          parent.hide("slow");
        }
      });
    }
  };
});
