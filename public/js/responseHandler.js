define(function(require) {

  /*
  
  module:     responseHandler
  usage:      handles responses from the ajax calls
  author:     R
   */
  "use strict";
  return {
    successResponse: function(response) {
      var responseDocMain;
      responseDocMain = $($.parseHTML(response)).filter(".main");
      if (responseDocMain.find(".errors").length > 0) {
        $(".server-response").replaceWith(responseDocMain.find(".server-response"));
        require("dismissAnimator").reveal($(".errors"));
      } else {
        $(".sidebar").replaceWith(responseDocMain.find(".sidebar"));
        sidebarHandler.init();
      }
      $(".app-outputs").replaceWith(responseDocMain.find(".app-outputs"));
      if ($(".app-outputs").children().length > 0) {
        require("dismissAnimator").enrolDismiss($(".app-outputs").children());
        return require("labelAnimator").init();
      }
    },
    errorResponse: function(response) {
      var error, errorLog, i, j, key, len, len1, ref, ref1, responseObject;
      errorLog = "<div class=\"errors\"> <a class=\"dismiss\" href=\"#dismiss\">[ x ]</a> <p>Something went wrong, please try again..</p> <ul class=\"error-list\">";
      responseObject = JSON.parse(response.responseText);
      ref = Object.keys(responseObject);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        ref1 = responseObject[key];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          error = ref1[j];
          errorLog += "<li class=\"error-list-item\">" + error + "</li>";
        }
      }
      errorLog += "</ul></div>";
      $(".server-response").html(errorLog);
      return require("dismissAnimator").dismiss($(".errors"));
    }
  };
});
