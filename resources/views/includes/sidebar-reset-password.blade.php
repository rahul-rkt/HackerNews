
<div class="reset-password">
  <h5 class="lead">Reset your password:</h5>
  <form id="post-password-reset">
    <input type="hidden" name="token" value="{{ $token }}"/>
    <div class="field-wrap">
      <label>Email Address<span class="req">*</span></label>
      <input name="email" type="email" required="" autocomplete="off"/>
    </div>
    <div class="field-wrap">
      <label>New Password<span class="req">*</span></label>
      <input name="password" type="password" required="" autocomplete="off"/>
    </div>
    <div class="field-wrap">
      <label>Retype New Password<span class="req">*</span></label>
      <input name="password" type="password" required="" autocomplete="off"/>
    </div>
    <button type="submit">Confirm</button>
  </form>
</div>