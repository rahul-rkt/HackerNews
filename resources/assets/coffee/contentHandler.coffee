define ->


    ###

    module:     contentHandler
    usage:      handles behaviour of components in the content
    author:     R

    ###


    "use strict"

    init: ->
        $(".server-response").on "click", "a", (event) ->
            parent = $(this).parent()
            if(parent.hasClass("errors"))
                event.preventDefault()
                parent.hide("slow")
            return

        return
