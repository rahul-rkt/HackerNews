define (require) ->


    ###

    module:     sidebarHandler
    usage:      handles behaviour of components in the sidebar
    author:     R

    ###


    "use strict"

    init: ->
        require("labelAnimator").init()

        # handles swapping of forms
        $(".server-request").on "click", "a", (event) ->
            event.preventDefault()
            $this = $(this)
            target = $this.attr("href")
            parent = $this.parent()
            if(parent.hasClass("tab"))
                parent.addClass "selected-tab"
                parent.siblings().removeClass "selected-tab"
            else
                $(".tab-selector .selected-tab").removeClass "selected-tab"
            $(".tab-content > div").not(target).hide()
            $(target).fadeIn 250
            return


        # handles control-button actions
        $(".control-buttons").on "click", "button", (event) ->
            event.preventDefault()
            target = $("." + $(this).attr("name"))
            if(!target.hasClass("reveal"))
                require("dismissAnimator").reveal target
            return

        return
