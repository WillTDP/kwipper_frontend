<script setup >

</script>

<template>
  <div>
    <h1>Login</h1>
    <form class="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <a href="#">Wachtwoord vergeten?</a>
      <form action="/action_page.php">
        <input type="checkbox" id="remember" name="remember" value="remember">
        <label for="remember">Remember me</label>
      </form>
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

  .login {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
  }
</style>