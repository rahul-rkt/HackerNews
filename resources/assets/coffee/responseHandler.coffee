define (require) ->


    ###

    module:     responseHandler
    usage:      handles responses from the ajax calls
    author:     R

    ###


    "use strict"

    successResponse: (response) ->
        responseDocMain = $($.parseHTML(response)).filter(".main")

        if(responseDocMain.find(".errors").length > 0)
            $(".server-response").replaceWith responseDocMain.find(".server-response")
            require("dismissAnimator").reveal $(".errors")
        else
            $(".sidebar").replaceWith responseDocMain.find(".sidebar")
            sidebarHandler.init()

        $(".app-outputs").replaceWith responseDocMain.find(".app-outputs")
        if($(".app-outputs").children().length > 0)
            require("dismissAnimator").enrolDismiss $(".app-outputs").children()
            require("labelAnimator").init()


    errorResponse: (response) ->
        errorLog = "<div class=\"errors\">
                        <a class=\"dismiss\" href=\"#dismiss\">[ x ]</a>
                        <p>Something went wrong, please try again..</p>
                        <ul class=\"error-list\">"

        responseObject = JSON.parse(response.responseText)
        for key in Object.keys(responseObject)
            for error in responseObject[key]
                errorLog += "<li class=\"error-list-item\">#{error}</li>"
        errorLog += "</ul></div>"
        $(".server-response").html(errorLog)

        require("dismissAnimator").dismiss $(".errors")
