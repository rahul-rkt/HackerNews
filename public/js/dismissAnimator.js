define(function() {

  /*
  
  module:     dismissAnimator
  usage:      handles behaviour of a dismissable block
  author:     R
   */
  "use strict";
  return {
    enrolDismiss: function(block) {
      return block.on("click", "a", function(event) {
        if ($(this).hasClass("dismiss")) {
          event.preventDefault();
          block.addClass("conceal");
          return setTimeout(function(block) {
            return block.removeClass("reveal");
          }, 1200, block);
        }
      });
    },
    reveal: function(block) {
      if (block.hasClass("conceal")) {
        block.removeClass("conceal");
      }
      return block.addClass("reveal");
    }
  };
});
