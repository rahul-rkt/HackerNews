require.config({
  baseUrl: "/js/",
  paths: {
    jquery: "./lib/jquery-2.1.4.min"
  }
});

require(["jquery", "navHandler", "sidebarHandler", "ajaxHandler", "contentHandler"], function($, navHandler, sidebarHandler, ajaxHandler, contentHandler) {

  /*
  
  module:     main
  usage:      everything starts here
  author:     R
   */
  "use strict";
  return $(document).ready(function() {
    navHandler.init();
    sidebarHandler.init();
    ajaxHandler.init();
    contentHandler.init();
  });
});
