define ->


    ###

    module:     dismissAnimator
    usage:      handles behaviour of a dismissable block
    author:     R

    ###


    "use strict"

    enrolDismiss: (block) ->
        block.on "click", "a", (event) ->
            if($(this).hasClass("dismiss"))
                event.preventDefault()
                block.addClass "conceal"

                setTimeout (block) ->
                    block.removeClass "reveal"
                , 1200, block


    reveal: (block) ->
        if(block.hasClass("conceal"))
            block.removeClass "conceal"
        block.addClass("reveal")
