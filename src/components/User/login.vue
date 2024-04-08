<script setup >

</script>

<template>
  <div class="login_element">
    <h1 class="h1">Login</h1>
    <form class="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <a href="#">Wachtwoord vergeten?</a>
        <input type="checkbox" id="remember" name="remember" value="remember">
        <label for="remember" class="remember_label">Remember me</label>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  .login_element {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    
  }

  .h1 {
    color: #000;  
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