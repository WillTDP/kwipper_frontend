<script setup >

</script>

<template>
  <div class="login_element">
    <div class="green_rect">
      <img src="/logo.svg" alt="logo" />
    </div>
    <h1 class="h1">Login</h1>
    <form class="login">
      <div class="inputfield">
        <label for="username">E-mailadres</label>
        <input class="textbox" type="text" placeholder="Username" />
      </div>
      <div class="inputfield">
        <label for="password">Wachtwoord</label>
        <input class="textbox" type="password" placeholder="Password" />
      </div>
      <a href="#">Wachtwoord vergeten?</a>
      <div>
        <input type="checkbox" id="remember" name="remember" value="remember">
        <label for="remember" class="remember_label">Ingelogd blijven</label>
      </div>
      <button type="submit" class="login_btn">Login</button>
    </form>
  </div>
</template>

<style scoped>
  .login_element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .green_rect {
    width: 366px;
    height: 88px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background: #2B5740;
  }

  .green_rect img {
    width: 200px;
    height: 100%;
  }

  .login {
    display: flex;
    flex-direction: column;
    
  }

  .h1 {
    color: #000;  
    font-size: 32px;
  }

  .inputfield {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
  }

  label {
    color: black;
  }

  .textbox {
    width: 360px;
    height: 38px; 
    border: 1px solid #2B5740;
    border-radius: 10px;
    margin-top: 8px;
  }

  .login_btn {
    margin-top: 10px;
    background-color: #2B5740;
    color: #F0F2F1;
  }
</style>