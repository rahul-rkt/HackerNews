define(function(require) {

  /*
  
  module:     requestHandler
  usage:      handles all the ajax calls
  author:     R
   */
  "use strict";
  return {
    init: function() {
      var errorResponseHelper, loading, loadingAnimator, preRequestHelper, sidebarHandler, successResponseHelper;
      sidebarHandler = require("sidebarHandler");
      loading = require("loadingAnimator");
      loadingAnimator = new loading();
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf_token"]').attr("content")
        }
      });
      preRequestHelper = function(event, loadingScreenPOS) {
        if (loadingScreenPOS == null) {
          loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar;
        }
        event.preventDefault();
        return loadingAnimator.start(loadingScreenPOS);
      };
      successResponseHelper = function(response, loadingScreenPOS) {
        if (loadingScreenPOS == null) {
          loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar;
        }
        loadingAnimator.stop(loadingScreenPOS);
        return require("responseHandler").successResponse(response);
      };
      errorResponseHelper = function(response, loadingScreenPOS) {
        if (loadingScreenPOS == null) {
          loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar;
        }
        loadingAnimator.stop(loadingScreenPOS);
        return require("responseHandler").errorResponse(response);
      };
      return $(document).on("submit", "form", function(event) {
        var $this, request, url;
        $this = $(this);
        if ($this.attr("id") === "post-auth-register") {
          preRequestHelper(event);
          request = {
            "name": $('#post-auth-register input[name="name"]').val(),
            "email": $('#post-auth-register input[name="email"]').val(),
            "password": $('#post-auth-register input[name="password"]').val()
          };
          return $.ajax({
            type: "POST",
            dataType: "HTML",
            url: "/auth/register",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function(response) {
              return successResponseHelper(response);
            },
            error: function(response) {
              return errorResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "post-auth-login") {
          preRequestHelper(event);
          request = {
            "email": $('#post-auth-login input[name="email"]').val(),
            "password": $('#post-auth-login input[name="password"]').val()
          };
          return $.ajax({
            type: "POST",
            dataType: "HTML",
            url: "/auth/login",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function(response) {
              return successResponseHelper(response);
            },
            error: function(response) {
              return errorResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "get-auth-logout") {
          preRequestHelper(event);
          return $.ajax({
            type: "GET",
            dataType: "HTML",
            url: "/auth/logout",
            success: function(response) {
              return successResponseHelper(response);
            },
            error: function(response) {
              return errorResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "post-password-email") {
          preRequestHelper(event);
          request = {
            "email": $('#post-password-email input[name="email"]').val()
          };
          return $.ajax({
            type: "POST",
            dataType: "HTML",
            url: "/password/email",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function(response) {
              return successResponseHelper(response);
            },
            error: function(response) {
              return errorResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "post-password-reset") {
          preRequestHelper(event);
          request = {
            "token": $('#post-password-reset input[name="token"]').val(),
            "email": $('#post-password-reset input[name="email"]').val(),
            "password": $('#post-password-reset input[name="password"]').val(),
            "password_confirmation": $('#post-password-reset input[name="password_confirmation"]').val()
          };
          return $.ajax({
            type: "POST",
            dataType: "HTML",
            url: "/password/reset",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(request),
            success: function(response) {
              return successResponseHelper(response);
            },
            error: function(response) {
              return errorResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "get-article-details") {
          preRequestHelper(event, loadingAnimator.loadingScreenPOS.appOutputs);
          url = $('#get-article-details input[name="url"]').val();
          return $.ajax({
            type: "GET",
            dataType: "HTML",
            url: "/article/details/" + url,
            success: function(response) {
              var data;
              console.log("YATA");
              data = JSON.parse(response);
              return console.log(data.status + " : " + data.log);
            },
            error: function(response) {
              console.log("NEIN");
              return console.log(response);
            }
          });
        }
      });
    }
  };
});
