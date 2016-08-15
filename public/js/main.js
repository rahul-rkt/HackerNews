require.config({
  baseUrl: "/js/",
  paths: {
    jquery: "./lib/jquery-2.1.4.min"
  }
});

require(["jquery", "navHandler", "sidebarHandler", "requestHandler"], function($, navHandler, sidebarHandler, requestHandler) {

  /*
  
  module:     main
  usage:      everything starts here
  author:     R
   */
  "use strict";
  return $(document).ready(function() {
    navHandler.init();
    sidebarHandler.init();
    requestHandler.init();
  });
});
