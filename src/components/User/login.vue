<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const loginData = ref({
  email: '',
  password: '',
});

const handleSubmit = async () => {
  
  try {
          await store.dispatch('login', loginData.value);
          console.log('User logged in successfully');
          window.location.href = '/';
        } catch (error) {
        console.error('Error creating user:', error);
        // Handle error if needed
        }

    console.log('Form submitted');
};
</script>

<template>
  <div class="login_div">
    <img src="/Images/tent.png" alt="tent image" class="image"/>
    <div class="login_element">
      <div class="green_rect">
        <img src="/logo.svg" alt="logo" />
      </div>
      <h1 class="h1">Login</h1>
      <form class="login" @submit.prevent="handleSubmit">
        <div class="inputfield">
          <label for="username">E-mailadres</label>
          <input class="textbox" type="text" v-model="loginData.email" placeholder="Voorbeeld@email.com" />
        </div>
        <div class="inputfield">
          <label for="password">Wachtwoord</label>
          <input class="textbox" type="password" v-model="loginData.password" placeholder="Wachtwoord" />
        </div>
        <a class="forgot_password" href="#">Wachtwoord vergeten?</a>
        <div class="and_remember_me">
          <input type="checkbox" id="remember" name="remember" value="remember">
          <label for="remember" class="remember_label">Ingelogd blijven</label>
        </div>
        <button type="submit" class="login_btn">Login</button>
        <p class="signup_text">Ik heb nog geen Account. <router-link class="to_signup" to="/signup">Maak een Account aan</router-link></p>      
      </form>
    </div>
  </div>
</template>

<style scoped>
  .login_div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  
  .login_element {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
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
    color: #2B5740;
    font-size: 32px;
  }

  .inputfield {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
  }

  label {
    color: #090D0B;
  }

  .textbox {
    width: 350px;
    height: 38px; 
    border: 1px solid #2B5740;
    border-radius: 10px;
    margin-top: 8px;
    padding-left: 10px;
  }

  .forgot_password {
    color: #FF4D00;
    margin-top: 4px;
    font-size: 10px;
  }

  .and_remember_me {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .login_btn {
    margin-top: 44px;
    background-color: #2B5740;
    color: #F0F2F1;
  }

  .signup_text {
    color: #090D0B;
    margin-top: 150px;
    font-size: 16px;
  }

  .to_signup {
    color: #FF4D00;
  }

  @media screen and (max-width: 1025px) {
    .login_div {
      flex-direction: column;
      align-items: center;
    }

    .image {
      display: none;
    }

  }
</style>