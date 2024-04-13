<script setup>
/*https://dev.to/yogeshgalav7/how-to-build-multi-step-form-in-vuejs-4n5b*/

import { ref } from 'vue';
import { watch } from 'vue';
import multistepform from './multistepform.vue';

let username = ref('');
let email = ref('');
let password = ref('');

const steps = ref([
    {'step_no':1,'step_valid':false,'step_skip':false},
    {'step_no':2,'step_valid':false,'step_skip':true},
    {'step_no':3,'step_valid':false,'step_skip':false},
]);

const multiStepForm = ref(null);

const validateStep = (step) => {
    if (step === 1) {
        if (!username.value || !email.value) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 1 is not valid');
            return false; // Prevent moving to the next step
        } else {
            steps.value[step - 1].step_valid = true;
        }
    } else if (step === 2) {
        if (!password.value) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 2 is not valid');
            return false; // Prevent form submission
        } else {
            steps.value[step - 1].step_valid = true;
        }
    }
    console.log(`Step ${step} is valid`);
    return true;
}

let currentStep = ref(1);

const nextStep = () => {
  if (validateStep(currentStep.value)) {
    currentStep.value++;
  }
  else {
    //console log message with error
    console.log('Please fill all the fields');
  }
}


const submitForm = () => {
    // api call to submit all data via post request
    // redirect to somewhere
}


</script>

<template>
    <div>
        <multistepform
            ref="multiStepForm"
            :steps="steps"
            @onComplete="submitForm"
            @validateStep="validateStep">
            <template #header>
                <h1 style="color:#090D0B">Get Started -></h1>
            </template>

            <template v-slot:step1>
                <div v-if="currentStep === 1">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" v-model="username" required>

                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" v-model="email" required>
                </div>
            </template>

            <template v-slot:step2>
                <div v-if="currentStep === 2">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>
            </template>

            <template v-slot:footer>
                <button class="btn btn-primary" 
                                type="button" 
                                @click="nextStep">Next Step</button>
            </template>
        </multistepform>
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