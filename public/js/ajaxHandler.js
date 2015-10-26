define(function(require) {

  /*
  
  module:     ajaxHandler
  usage:      handles all the ajax calls
  author:     R
   */
  "use strict";
  var divineLoadingMessage;
  divineLoadingMessage = ["Adding Hidden Agendas", "Adjusting Bell Curves", "Aesthesizing Industrial Areas", "Aligning Covariance Matrices", "Applying Feng Shui Shaders", "Applying Theatre Soda Layer", "Asserting Packed Exemplars", "Attempting to Lock Back-Buffer", "Binding Sapling Root System", "Breeding Fauna", "Building Data Trees", "Bureacritizing Bureaucracies", "Calculating Inverse Probability Matrices", "Calculating Llama Expectoration Trajectory", "Calibrating Blue Skies", "Charging Ozone Layer", "Coalescing Cloud Formations", "Cohorting Exemplars", "Collecting Meteor Particles", "Compounding Inert Tessellations", "Compressing Fish Files", "Computing Optimal Bin Packing", "Concatenating Sub-Contractors", "Containing Existential Buffer", "Debarking Ark Ramp", "Deciding What Message to Display Next", "Decomposing Singular Values", "Decrementing Tectonic Plates", "Deleting Ferry Routes", "Depositing Slush Funds", "Destabilizing Economic Indicators", "Determining Width of Blast Fronts", "Deunionizing Bulldozers", "Dicing Models", "Diluting Livestock Nutrition Variables", "Downloading Satellite Terrain Data", "Exposing Flash Variables to Streak System", "Extracting Resources", "Factoring Pay Scale", "Fetching Rhinoceros Breeding Timetable", "Fixing Election Outcome Matrix", "Flood-Filling Ground Water", "Flushing Pipe Network", "Gathering Particle Sources", "Generating Jobs", "Gesticulating Mimes", "Graphing Whale Migration", "Hiding Willio Webnet Mask", "Implementing Impeachment Routine", "Increasing Accuracy of RCI Simulators", "Increasing Magmafacation", "Initializing My Sim Tracking Mechanism", "Initializing Robotic Click-Path AI", "Inserting Sublimated Messages", "Integrating Curves", "Integrating Illumination Form Factors", "Integrating Population Graphs", "Iterating Cellular Automata", "Lecturing Errant Subsystems", "Mixing Genetic Pool", "Modeling Object Components", "Mopping Occupant Leaks", "Normalizing Power", "Obfuscating Quigley Matrix", "Partitioning City Grid Singularities", "Perturbing Matrices", "Pixalating Nude Patch", "Polishing Water Highlights", "Populating Lot Templates", "Preparing Sprites for Random Walks", "Prioritizing Landmarks", "Projecting Law Enforcement Pastry Intake", "Realigning Alternate Time Frames", "Reconfiguring User Mental Processes", "Relaxing Splines", "Removing Road Network Speed Bumps", "Removing Texture Gradients", "Removing Vehicle Avoidance Behavior", "Resolving GUID Conflict", "Reticulating Splines", "Retracting Phong Shader", "Retrieving from Back Store", "Reverse Engineering Image Consultant", "Routing Neural Network Infanstructure", "Scattering Rhino Food Sources", "Scrubbing Terrain", "Searching for Llamas", "Seeding Architecture Simulation Parameters", "Sequencing Particles", "Setting Advisor Moods", "Setting Inner Deity Indicators", "Setting Universal Physical Constants", "Speculating Stock Market Indices", "Splatting Transforms", "Stratifying Ground Layers", "Sub-Sampling Water Data", "Synthesizing Gravity", "Synthesizing Wavelets", "Time-Compressing Simulator Clock", "Unable to Reveal Current Activity", "Weathering Buildings", "Zeroing Crime Network"];
  return {
    init: function() {
      var badResponseHelper, contentHandler, loadingScreen, postResponseHelper, preRequestHelper, sidebarHandler;
      sidebarHandler = require("sidebarHandler");
      contentHandler = require("contentHandler");
      loadingScreen = $(".loading");
      $.ajaxSetup({
        headers: {
          "X-CSRF-TOKEN": $('meta[name="csrf_token"]').attr("content")
        }
      });
      preRequestHelper = function(event) {
        var selectedLoadingMessage;
        event.preventDefault();
        selectedLoadingMessage = divineLoadingMessage[Math.floor(Math.random() * 101.)];
        loadingScreen.find("p").html(selectedLoadingMessage);
        return loadingScreen.css("display", "flex");
      };
      postResponseHelper = function(response) {
        var responseDocMain;
        loadingScreen.css("display", "none");
        responseDocMain = $($.parseHTML(response)).filter(".main");
        $(".server-request").replaceWith(responseDocMain.find(".server-request"));
        sidebarHandler.init();
        $(".server-response").replaceWith(responseDocMain.find(".server-response"));
        return contentHandler.init();
      };
      badResponseHelper = function(response) {
        var error, errorLog, i, j, key, len, len1, ref, ref1, responseObject;
        loadingScreen.css("display", "none");
        errorLog = "<div class=\"errors\"> <a class=\"dismiss-error\" href=\"#dismiss\">[ x ]</a> <p>Something went wrong, please try again..</p> <ul class=\"error-list\">";
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
        return $(".server-response").html(errorLog);
      };
      return $(document).on("submit", "form", function(event) {
        var $this, request;
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
              return postResponseHelper(response);
            },
            error: function(response) {
              return badResponseHelper(response);
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
              return postResponseHelper(response);
            },
            error: function(response) {
              return postResponseHelper(response);
            }
          });
        } else if ($this.attr("id") === "get-auth-logout") {
          preRequestHelper(event);
          return $.ajax({
            type: "GET",
            dataType: "HTML",
            url: "/auth/logout",
            success: function(response) {
              return postResponseHelper(response);
            },
            error: function(response) {
              return postResponseHelper(response);
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
              return postResponseHelper(response);
            },
            error: function(response) {
              return badResponseHelper(response);
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
              return postResponseHelper(response);
            },
            error: function(response) {
              return badResponseHelper(response);
            }
          });
        }
      });
    }
  };
});
