define ->


    ###

    module:     sidebarHandler
    usage:      handles behaviour of components in the sidebar
    author:     R

    ###


    "use strict"

    init: ->
        # handles label animation
        $(".server-request").find("input").on "focus blur", (event) ->
            $this = $(this)
            label = $this.prev("label")
            if($this.val() == "")
                if(event.type == "focus")
                    label.addClass "active"
                else if(event.type == "blur")
                    label.removeClass "active"
            return


        # handles swapping of forms
        $(".server-request").on "click", "a", (event) ->
            event.preventDefault()
            $this = $(this)
            target = $this.attr("href")
            parent = $this.parent()
            if(parent.hasClass("tab"))
                parent.addClass "active"
                parent.siblings().removeClass "active"
            else
                $(".tab-selector .active").removeClass "active"
            $(".tab-content > div").not(target).hide()
            $(target).fadeIn 250
            return

        return
