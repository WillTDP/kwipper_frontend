<script setup>
import { ref } from 'vue';

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    what_jeugdbeweging: '',
    jb_name: '',
    group_number: '',
    verenigiging_name: '',
    has_ondnr: '',
    ondnr: '',
    straatnaam: '',
    huisnummer: '',
    postcode: '',
    gemeente: ''
});

const handleSubmit = async () => {
    // Call your API to create the user
    // You can access the form data with `form.value`
};
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="form.first_name" placeholder="First Name" />
            <input v-model="form.last_name" placeholder="Last Name" />
            <input v-model="form.email" placeholder="Email" />
            <input v-model="form.phone" placeholder="Phone" />
            <input v-model="form.password" type="password" placeholder="Password" />
            <!-- Add the rest of the form fields here -->
            <button type="submit">Sign Up</button>
        </form>
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