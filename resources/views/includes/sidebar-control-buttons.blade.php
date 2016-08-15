
<div class="control-buttons">
  <button name="add-article" class="grey-button"><img src="/img/add-article.png"/></button>@if(Auth::user()->level < 3)
  <button name="approve-article" class="grey-button"><img src="/img/approve-article.png"/></button>@endif
  @if(Auth::user()->level == 1)
  <button name="member-settings" class="grey-button"><img src="/img/member-settings.png"/></button>@endif
  <button name="user-settings" class="grey-button"><img src="/img/user-settings.png"/></button>
</div>