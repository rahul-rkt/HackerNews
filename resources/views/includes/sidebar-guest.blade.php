
<div id="guest">
  <div class="container">
    <ul class="tab-selector">
      <li class="tab active"><a href="#signup" class="button">Sign Up</a></li>
      <li class="tab"><a href="#login" class="button">Log In</a></li>
    </ul>
    <div class="tab-content">
      <div id="signup">
        <h5 class="lead">Sign Up for Free</h5>
        <form id="post-auth-register">
          <div class="field-wrap">
            <label>Display Name<span class="req">*</span></label>
            <input name="name" type="text" required="" autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>Email Address<span class="req">*</span></label>
            <input name="email" type="email" required="" autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>Password<span class="req">*</span></label>
            <input name="password" type="password" required="" autocomplete="off"/>
          </div>
          <button type="submit" class="submit-button">Get Started</button>
        </form>
      </div>
      <div id="login">
        <h5 class="lead">Welcome Back</h5>
        <form id="post-auth-login">
          <div class="field-wrap">
            <label>Email Address<span class="req">*</span></label>
            <input name="email" type="email" required="" autocomplete="off"/>
          </div>
          <div class="field-wrap">
            <label>Password<span class="req">*</span></label>
            <input name="password" type="password" required="" autocomplete="off"/>
          </div>
          <p class="forgot"><a href="#forgot">Forgot Password?</a></p>
          <button type="submit" class="submit-button">Start Hacking</button>
        </form>
      </div>
      <div id="forgot">
        <h5 class="lead">Forgot Password?</h5>
        <form id="post-password-email">
          <div class="field-wrap">
            <label>Email Address<span class="req">*</span></label>
            <input name="email" type="email" required="" autocomplete="off"/>
          </div>
          <button type="submit" class="submit-button">Send Reset Link</button>
        </form>
      </div>
    </div>
  </div>
</div>