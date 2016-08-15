define (require) ->


    ###

    module:     requestHandler
    usage:      handles all the ajax calls
    author:     R

    ###


    "use strict"

    init: ->
        sidebarHandler      = require "sidebarHandler"
        loading             = require "loadingAnimator"
        loadingAnimator = new loading()

        $.ajaxSetup headers: "X-CSRF-TOKEN" : $('meta[name="csrf_token"]').attr("content")


        preRequestHelper = (event, loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar) ->
            event.preventDefault()
            loadingAnimator.start(loadingScreenPOS)


        successResponseHelper = (response, loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar) ->
            loadingAnimator.stop(loadingScreenPOS)
            require("responseHandler").successResponse(response)


        errorResponseHelper = (response, loadingScreenPOS = loadingAnimator.loadingScreenPOS.sidebar) ->
            loadingAnimator.stop(loadingScreenPOS)
            require("responseHandler").errorResponse(response)


        $(document).on "submit", "form", (event) ->
            $this = $(this)

            if($this.attr("id") == "post-auth-register")
                preRequestHelper(event)

                request = {
                            "name"      : $('#post-auth-register input[name="name"]').val()
                            "email"     : $('#post-auth-register input[name="email"]').val()
                            "password"  : $('#post-auth-register input[name="password"]').val()
                          }

                $.ajax
                    type: "POST"
                    dataType: "HTML"
                    url: "/auth/register"
                    contentType: "application/json; charset=utf-8"
                    data: JSON.stringify(request)

                    success: (response) ->
                        successResponseHelper(response)

                    error: (response) ->
                        errorResponseHelper(response)


            else if($this.attr("id") == "post-auth-login")
                preRequestHelper(event)

                request = {
                            "email"     : $('#post-auth-login input[name="email"]').val()
                            "password"  : $('#post-auth-login input[name="password"]').val()
                          }

                $.ajax
                    type: "POST"
                    dataType: "HTML"
                    url: "/auth/login"
                    contentType: "application/json; charset=utf-8"
                    data: JSON.stringify(request)

                    success: (response) ->
                        successResponseHelper(response)

                    error: (response) ->
                        errorResponseHelper(response)


            else if($this.attr("id") == "get-auth-logout")
                preRequestHelper(event)

                $.ajax
                    type: "GET"
                    dataType: "HTML"
                    url: "/auth/logout"

                    success: (response) ->
                        successResponseHelper(response)

                    error: (response) ->
                        errorResponseHelper(response)


            else if($this.attr("id") == "post-password-email")
                preRequestHelper(event)

                request = {
                            "email"     : $('#post-password-email input[name="email"]').val()
                          }

                $.ajax
                    type: "POST"
                    dataType: "HTML"
                    url: "/password/email"
                    contentType: "application/json; charset=utf-8"
                    data: JSON.stringify(request)

                    success: (response) ->
                        successResponseHelper(response)

                    error: (response) ->
                        errorResponseHelper(response)


            else if($this.attr("id") == "post-password-reset")
                preRequestHelper(event)

                request = {
                            "token"     : $('#post-password-reset input[name="token"]').val()
                            "email"     : $('#post-password-reset input[name="email"]').val()
                            "password"  : $('#post-password-reset input[name="password"]').val()
                "password_confirmation" : $('#post-password-reset input[name="password_confirmation"]').val()
                          }

                $.ajax
                    type: "POST"
                    dataType: "HTML"
                    url: "/password/reset"
                    contentType: "application/json; charset=utf-8"
                    data: JSON.stringify(request)

                    success: (response) ->
                        successResponseHelper(response)

                    error: (response) ->
                        errorResponseHelper(response)


            else if($this.attr("id") == "get-article-details")
                preRequestHelper(event, loadingAnimator.loadingScreenPOS.appOutputs)

                url = $('#get-article-details input[name="url"]').val()

                $.ajax
                    type: "GET"
                    dataType: "HTML"
                    url: "/article/details/" + url

                    success: (response) ->
                        console.log "YATA"
                        data = JSON.parse(response)
                        console.log data.status+" : "+data.log

                    error: (response) ->
                        console.log "NEIN"
                        console.log response
