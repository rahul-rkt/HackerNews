
<div class="errors"><a href="#dismiss" class="dismiss">[ x ]</a>
  <p>Something went wrong, please try again..</p>
  <ul class="error-list">
    @foreach($errors->all() as $error)
        <li class="error-list-item">{{ $error }}</li>
    @endforeach
  </ul>
</div>