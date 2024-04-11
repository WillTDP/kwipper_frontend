<script setup>
/*https://dev.to/yogeshgalav7/how-to-build-multi-step-form-in-vuejs-4n5b*/

import { ref } from 'vue';
import multistepform from './multistepform.vue';

const steps = ref([
    {'step_no':1,'step_valid':false,'step_skip':false},
    {'step_no':2,'step_valid':false,'step_skip':true},
    {'step_no':3,'step_valid':false,'step_skip':false},
]);
</script>

<template>
    <div>
        <multistepform>
            <template #header>
                <h1 style="color:#090D0B">Get Started -></h1>
            </template>
            <template v-slot:footer>
                <button class="btn btn-primary" 
                type="submit">Get OTP</button>
            </template>
            /steps slots
         </multistepform>
        <!----<form @submit.prevent="handleSubmit">
            <input v-model="form.first_name" placeholder="First Name" />
            <input v-model="form.last_name" placeholder="Last Name" />
            <input v-model="form.email" placeholder="Email" />
            <input v-model="form.phone" placeholder="Phone" />
            <input v-model="form.password" type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>-->
    </div>
</template>

<style scoped>
/* Add your styles here */
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

input {
    display: block;
    margin-bottom: 10px;
}

button {
    display: block;
    margin-top: 10px;
}

</style>