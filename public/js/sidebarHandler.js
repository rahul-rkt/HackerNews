define(function() {

  /*
  
  module:     sidebarHandler
  usage:      handles behaviour of components in the sidebar
  author:     R
   */
  "use strict";
  return {
    init: function() {
      $(".server-request").find("input").on("focus blur", function(event) {
        var $this, label;
        $this = $(this);
        label = $this.prev("label");
        if ($this.val() === "") {
          if (event.type === "focus") {
            label.addClass("active");
          } else if (event.type === "blur") {
            label.removeClass("active");
          }
        }
      });
      $(".server-request").on("click", "a", function(event) {
        var $this, parent, target;
        event.preventDefault();
        $this = $(this);
        target = $this.attr("href");
        parent = $this.parent();
        if (parent.hasClass("tab")) {
          parent.addClass("active");
          parent.siblings().removeClass("active");
        } else {
          $(".tab-selector .active").removeClass("active");
        }
        $(".tab-content > div").not(target).hide();
        $(target).fadeIn(250);
      });
    }
  };
});
