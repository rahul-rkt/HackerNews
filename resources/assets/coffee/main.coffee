# config ----------------------------------------------------------------------
require.config

    baseUrl: "/js/"

    paths:
        jquery: "./lib/jquery-2.1.4.min"


# main ------------------------------------------------------------------------
require [

    "jquery"
    "navHandler"
    "sidebarHandler"
    "requestHandler"

    ], ($, navHandler, sidebarHandler, requestHandler) ->


    ###

    module:     main
    usage:      everything starts here
    author:     R

    ###


    "use strict"

    $(document).ready ->
        navHandler.init()
        sidebarHandler.init()
        requestHandler.init()
        return
