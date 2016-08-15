define(function() {

  /*
  
  module:     labelAnimator
  usage:      handles behaviour of labels in forms
  author:     R
   */
  "use strict";
  return {
    init: function() {
      return $(document).find("input").on("focus blur", function(event) {
        var $this, label;
        $this = $(this);
        label = $this.prev("label");
        if ($this.val() === "") {
          if (event.type === "focus") {
            label.addClass("in-focus");
          } else if (event.type === "blur") {
            label.removeClass("in-focus");
          }
        }
      });
    }
  };
});
