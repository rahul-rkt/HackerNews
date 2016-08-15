define ->


    ###

    module:     labelAnimator
    usage:      handles behaviour of labels in forms
    author:     R

    ###


    "use strict"

    init: ->
        # handles label animation
        $(document).find("input").on "focus blur", (event) ->
            $this = $(this)
            label = $this.prev("label")
            if($this.val() == "")
                if(event.type == "focus")
                    label.addClass "in-focus"
                else if(event.type == "blur")
                    label.removeClass "in-focus"
            return
