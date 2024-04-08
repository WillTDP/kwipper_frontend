<script setup >

</script>

<template>
  <div class="login_element">
    <div class="green_rect">
      <img src="/logo.svg" alt="logo" />
    </div>
    <h1 class="h1">Login</h1>
    <form class="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <a href="#">Wachtwoord vergeten?</a>
      <div>
        <input type="checkbox" id="remember" name="remember" value="remember">
        <label for="remember" class="remember_label">Remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
  .login_element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
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

  .remember_label {
    color: black;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
  }
</style>