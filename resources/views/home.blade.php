<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="language" content="English">
    <meta name="author" content="Rahul Thakur">
    <meta name="description" content="A news board">
    <meta name="copyright" content="Rahul Thakur">
    <meta name="csrf_token" content="{{ csrf_token() }}">
    <title>HackerNews</title>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/master.css">
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96">
    <link rel="shortcut icon" href="favicon.ico">
  </head>
  <body>
    <!--[if lt IE 10]>
    <div class="browserupgrade"><h1>Incompatible Browser!</h1><p>You are using an <b>outdated</b> browser.<br/> <a href="http://browsehappy.com/">Click here</a> to upgrade to a mordern browser and continue enjoying the web.</p></div>
    <div class="mask"></div>
    <![endif]-->
    <header id="top" class="header"><img src="/img/logo.png" alt="HackerNews">
      <h4>by Rahul Thakur</h4>
    </header>
    <nav class="nav">
      <ul id="nav">
        <li><a href="#implementation">Implementation</a></li>
        <li id="icon"><a href="#top"><img src="/img/icon.png"></a></li>
        <li><a href="http://github.com/rahul-rkt/HackerNews">Repository</a></li>
      </ul>
      <div id="nav-buffer"></div>
    </nav>
    <main id="implementation" class="main">
      <section class="content">
        <div class="server-response">
          @if($errors->any())
              @include("includes.errors")
          @endif
        </div>
        <div class="news-board"></div>
      </section>
      <section class="sidebar">
        <div class="server-request">
          @if(isset($token))
              @include("includes.sidebar-reset")
          @elseif(Auth::check())
              @include("includes.sidebar-user")
          @else
              @include("includes.sidebar-guest")
          @endif
        </div>
        <div class="loading">
          <div class="ring-animation"></div>
          <p class="divine-loading-message">Loading..</p>
        </div>
      </section>
    </main>
    <footer class="footer">&copy;&nbsp;2015&nbsp;<a href="http://rahulthakur.me" target="_blank">R</a></footer>
    <script data-main="/js/main" src="/js/lib/require.js"></script>
  </body>
</html>