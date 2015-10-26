elixir      = require "laravel-elixir"
gulp        = require "gulp"
gutil       = require "gulp-util"
coffee      = require "gulp-coffee"
clean       = require "gulp-clean"
run         = require "gulp-run"
require "laravel-elixir-jade"


# purge -----------------------------------------------------------------------
gulp.task "purge", ->
    gulp.src "./public/css/", {read: false}
        .pipe clean()
        .on "error", gutil.log

    gulp.src "./public/js/", {read: false}
        .pipe clean()
        .on "error", gutil.log

    gulp.src "./public/img/", {read: false}
        .pipe clean()
        .on "error", gutil.log


# js --------------------------------------------------------------------------
gulp.task "js", ->
    gulp.src "./resources/assets/coffee/*.coffee"
        .pipe coffee(bare: true)
        .pipe gulp.dest("./public/js/")
        # .pipe run("cd ./resources/assets/coffee/optimize; node r.js -o config.js")
        .on "error", gutil.log


# main ------------------------------------------------------------------------
elixir (mix) ->

    # mix.task "purge"

    mix.jade
            baseDir     : "./resources"
            src         : "/assets/jade/"
            search      : "**/*.jade"
            dest        : "/views/"
            blade       : true
            pretty      : true

       .sass "master.sass"

       .copy "resources/assets/coffee/lib", "public/js/lib"

       .task "js", "./resources/assets/coffee/**"

       .copy "resources/assets/img", "public/img"

       .browserSync proxy: "hackernews.dev"
