<script setup>
import { ref } from 'vue';
import multistepform from './multistepform.vue';
import {createUser}  from '../../../apiService';
import { useRouter } from 'vue-router';

const router = useRouter();


const signupData = {
    verified: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    what_jeugdbeweging: '',
    jb_name: '',
    verenigiging_name: '',
    group_number: '',
    ondnr: '',
    straatnaam: '',
    huisnummer: '',
    postcode: '',
    gemeente: '',
};

const steps = ref([
    {'step_no': 1, 'step_valid': false, 'step_skip': false},
    {'step_no': 2, 'step_valid': false, 'step_skip': false},
    {'step_no': 3, 'step_valid': false, 'step_skip': false},
    {'step_no': 4, 'step_valid': false, 'step_skip': false},
]);

const validateStep = (step) => {
    if (step === 1) {
        if (!signupData.first_name || !signupData.email || !signupData.last_name || !signupData.password) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 1 is not valid');
            return false;
        } else {
            steps.value[step - 1].step_valid = true;
        }
    } else if (step === 2) {
        if (!signupData.role) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 2 is not valid');
            return false;
        } else {
            steps.value[step - 1].step_valid = true;
        }
    }
    else if (step === 3 && signupData.role === 'Jeugdbeweging') {
        if (!signupData.what_jeugdbeweging) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 3 is not valid');
            return false;
        } else {
            steps.value[step - 1].step_valid = true;
            console.log(signupData.what_jeugdbeweging);
        }
    }
    else if (step === 4 && signupData.role === 'Jeugdbeweging') {
        if (!signupData.group_number || !signupData.jb_name || !signupData.phone || !signupData.straatnaam || !signupData.huisnummer || !signupData.postcode || !signupData.gemeente || !signupData.postbus) {
            steps.value[step - 1].step_valid = false;
            console.log('Step 4 is not valid');
            return false;
        } else {
            steps.value[step - 1].step_valid = true;
            console.log(signupData.group_number, signupData.jb_name, signupData.phone, signupData.straatnaam, signupData.huisnummer, signupData.postcode, signupData.gemeente, signupData.postbus);
        }
    }
    console.log(`Step ${step} is valid`);
    return true;
};

let currentStep = ref(1);

const nextStep = () => {
    if (validateStep(currentStep.value)) {
        currentStep.value++;
        console.log(`Current step is now: ${currentStep.value}`);
    } else {
        console.log('Please fill all the fields');
    }
};

const previousStep = () => {
    
    currentStep.value--;
    console.log(`Current step is now: ${currentStep.value}`);
};


const submitForm = async () => {
    try {
        // Call the createUser function from apiService.js and pass signupData.value

        const response = await createUser(signupData);
        console.log('User created successfully:', response);

        console.log('User created successfully:', signupData.value);

        // Clear the form after successful submission
        signupData.value = {
            verified: false,
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            role: '',
            what_jeugdbeweging: '',
            jb_name: '',
            verenigiging_name: '',
            group_number: '',
            ondnr: '',
            straatnaam: '',
            huisnummer: '',
            postcode: '',
            gemeente: '',
            // Reset other form fields if needed
        };
        router.push('/login');
        } catch (error) {
        console.error('Error creating user:', error);
        // Handle error if needed
        }

    console.log('Form submitted');
};

const updateStep = (step) => {
    currentStep.value = step;
    console.log(`Updated current step to: ${currentStep.value}`);
};
</script>

<template>
    <div class="top">
    <img src="/Images/tent.png" alt="tent image" class="mood_image"/>
    <div class="signup_div">
        
        <div class="green_rect">
            <img src="/logo.svg" alt="logo" />
        </div>
        <multistepform
            ref="multiStepForm"
            :steps="steps"
            :currentStep="currentStep"
            @onComplete="submitForm"
            @validateStep="validateStep"
            @updateStep="updateStep">

            <template v-slot:step1>
                <div v-if="currentStep === 1">
                    <h1>Maak account aan</h1>
                    <label for="voornaam">Voornaam:</label>
                    <input type="text" id="username" class="textbox" name="username" v-model="signupData.first_name" required>

                    <label for="achternaam">Achternaam:</label>
                    <input type="text" id="email" class="textbox" name="email" v-model="signupData.last_name" required>

                    <label for="email">Email:</label>
                    <input type="text" id="password" class="textbox" name="password" v-model="signupData.email" required>

                    <label for="password">Password:</label>
                    <input type="password" id="password" class="textbox" name="password" v-model="signupData.password" required>
                </div>
            </template>

            <template v-slot:step2>
                <div v-if="currentStep === 2">
                    <p>Ik wil website gebruiken als...</p>
                    <button class="type-user" @click="signupData.role = 'Particulier'">Particulier</button>
                    <button class="type-user" @click="signupData.role = 'Vereniging'">Vereniging</button>
                    <button class="type-user" @click="signupData.role = 'Jeugdbeweging'">Jeugdbeweging</button>
                </div>
            </template>

            <template v-slot:step3>
                <div v-if="currentStep === 3 && signupData.role === 'Particulier'">
                    <p class="step-3-title">Ik ben Particulier...</p>
                    <label for="phone">Telefoonnummer:</label>
                    <input type="text" id="phone" class="textbox" name="phone" v-model="signupData.phone" required>

                    <label for="straatnaam">Straatnaam:</label>
                    <input type="text" id="straatnaam" class="textbox" name="straatnaam" v-model="signupData.straatnaam" required>

                    <label for="huisnummer">Huisnummer:</label>
                    <input type="text" id="huisnummer" class="textbox" name="huisnummer" v-model="signupData.huisnummer" required>

                    <label for="postcode">Postcode:</label>
                    <input type="text" id="postcode" class="textbox" name="postcode" v-model="signupData.postcode" required>

                    <label for="gemeente">Gemeente:</label>
                    <input type="text" id="gemeente" class="textbox" name="gemeente" v-model="signupData.gemeente" required>

                    <label for="postbus">Postbus:</label>
                    <input type="text" id="postbus" class="textbox" name="postbus" v-model="signupData.postbus" required>
                    
                </div>
                <div v-if="currentStep === 3 && signupData.role === 'Vereniging'">
                    <p class="step-3-title">Vereniging gegevens</p>
                    <label for="vereniging_name">Vereniging naam:</label>
                    <input type="text" id="vereniging_name" class="textbox" name="vereniging_name" v-model="signupData.verenigiging_name" required>

                    <label for="phone">Telefoonnummer:</label>
                    <input type="text" id="phone" class="textbox" name="phone" v-model="signupData.phone" required>

                    <label for="straatnaam">Straatnaam:</label>
                    <input type="text" id="straatnaam" class="textbox" name="straatnaam" v-model="signupData.straatnaam" required>

                    <label for="huisnummer">Huisnummer:</label>
                    <input type="text" id="huisnummer" class="textbox" name="huisnummer" v-model="signupData.huisnummer" required>

                    <label for="postcode">Postcode:</label>
                    <input type="text" id="postcode" class="textbox" name="postcode" v-model="signupData.postcode" required>

                    <label for="gemeente">Gemeente:</label>
                    <input type="text" id="gemeente" class="textbox" name="gemeente" v-model="signupData.gemeente" required>

                    <label for="postbus">Postbus:</label>
                    <input type="text" id="postbus" class="textbox" name="postbus" v-model="signupData.postbus" required>
                    
                </div>
                <div v-if="currentStep === 3 && signupData.role === 'Jeugdbeweging'">
                    <p class="step-3-title">Ik wil een account aanmaken voor deze jeugdbeweging...</p>
                    <button class="type-user" @click="signupData.what_jeugdbeweging = 'Chiro'">Chiro</button>
                    <button class="type-user" @click="signupData.what_jeugdbeweging = 'KSA'">KSA</button>
                    <button class="type-user" @click="signupData.what_jeugdbeweging = 'KLJ'">KLJ</button>
                    <button class="type-user" @click="signupData.what_jeugdbeweging = 'Scouts'">Scouts en Gidsen Vlaanderen</button>
                    <br>
                    <input type="text" id="jeugdbeweging" class="other-jb-input" name="jeugdbeweging" placeholder="andere" v-model="signupData.what_jeugdbeweging" >
                    
                </div>
            </template>
            <template v-slot:step4>
                <div v-if="currentStep === 4 && signupData.role === 'Jeugdbeweging'">
                    <br><br>
                    <label for="groepnummer">AD-nummer van je {{signupData.what_jeugdbeweging}}:</label>
                    <input type="text" id="groepnummer" name="groepnummer" class="textbox" v-model="signupData.group_number" required>

                    <label for="jb_name">Jeugdbeweging naam:</label>
                    <input type="text" id="jb_name" name="jb_name" class="textbox" v-model="signupData.jb_name" required>

                    <label for="phone">Telefoonnummer:</label>
                    <input type="text" id="phone" name="phone" class="textbox" v-model="signupData.phone" required>

                    <label for="straatnaam">Straatnaam:</label>
                    <input type="text" id="straatnaam" name="straatnaam" class="textbox" v-model="signupData.straatnaam" required>

                    <label for="huisnummer">Huisnummer:</label>
                    <input type="text" id="huisnummer" name="huisnummer" class="textbox" v-model="signupData.huisnummer" required>

                    <label for="postcode">Postcode:</label>
                    <input type="text" id="postcode" name="postcode" class="textbox" v-model="signupData.postcode" required>

                    <label for="gemeente">Gemeente:</label>
                    <input type="text" id="gemeente" name="gemeente" class="textbox" v-model="signupData.gemeente" required>

                    <label for="postbus">Postbus:</label>
                    <input type="text" id="postbus" name="postbus" class="textbox" v-model="signupData.postbus" required>
                    
                </div>
                <div v-if="currentStep === 4 && signupData.role === 'Vereniging'">
                    <label for="Ondernemingsnummer">Ondernemingsnummer:</label>
                    <input type="text" id="Ondernemingsnummer" name="Ondernemingsnummer" v-model="signupData.ondnr" required>
                    
                </div>
            </template>

            <template v-slot:footer>
                <button class="next-step" 
                        type="button" 
                        @click="previousStep" v-if="currentStep>1">Vorige stap</button>
                <button class="next-step" 
                        type="button" 
                        @click="nextStep" v-if="currentStep<4">Volgende stap</button>
                <button class="next-step" 
                        type="button" 
                        @click="submitForm" v-if="currentStep===4">Account aanmaken</button>
            </template>
        </multistepform>
    </div>
    </div>
</template>

<style scoped>
.top {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.mood_image {
    display: flex;
}

.textbox{
    width: 350px;
    height: 38px; 
    border: 1px solid #2B5740;
    border-radius: 10px;
    margin-top: 8px;
    padding-left: 10px;
}

.textbox:first-child {
    margin-top: 2em;
}

.signup_div {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-right: 10%;
    padding-left: 10%;
}

div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}

.green_rect {
    align-items: center;
    background: #2B5740;
    border-radius: 12px;
    display: flex;
    flex-shrink: 0;
    height: 88px;
    justify-content: center;
    width: 366px;
}

.green_rect img {
    height: 100%;
    width: 200px;
}

input {
    display: block;
    margin-bottom: 10px;
}

button {
    display: block;
    margin-top: 10px;
}

.next-step {
    background-color: #2b5740;
    color: white;
    width: 100%;
}

.type-user, .type-user:hover, .type-user-clicked {
    background-color: #f0f2f1;
    color: black;
    width: 100%;
}

.type-user:hover, .type-user-clicked {
    background-color: #2b5740;
    color: white;
}

.other-jb-input {
    width: 70%;
    height: 38px; 
    border: 1px solid #2B5740;
    border-radius: 10px;
    margin-top: 8px;
    padding-left: 10px;
}

@media screen and (max-width: 1250px) {
    .top {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        padding-top: 5%;
    }

    .mood_image {
        display: none;
    }

    .signup_div {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-right: 0;
    }
}
</style>