define(function(require) {

  /*
  
  module:     sidebarHandler
  usage:      handles behaviour of components in the sidebar
  author:     R
   */
  "use strict";
  return {
    init: function() {
      require("labelAnimator").init();
      $(".server-request").on("click", "a", function(event) {
        var $this, parent, target;
        event.preventDefault();
        $this = $(this);
        target = $this.attr("href");
        parent = $this.parent();
        if (parent.hasClass("tab")) {
          parent.addClass("selected-tab");
          parent.siblings().removeClass("selected-tab");
        } else {
          $(".tab-selector .selected-tab").removeClass("selected-tab");
        }
        $(".tab-content > div").not(target).hide();
        $(target).fadeIn(250);
      });
      $(".control-buttons").on("click", "button", function(event) {
        var target;
        event.preventDefault();
        target = $("." + $(this).attr("name"));
        if (!target.hasClass("reveal")) {
          require("dismissAnimator").reveal(target);
        }
      });
    }
  };
});
