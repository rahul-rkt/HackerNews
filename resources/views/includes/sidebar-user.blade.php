
<div id="user">
  <form id="get-auth-logout">
    <button type="submit">Logout</button>
  </form><img src="{{ Auth::user()->pic }}" class="dp"/>
  <p class="name">{{ Auth::user()->name }}</p>
  <p class="email">{{ Auth::user()->email }}</p>
</div>