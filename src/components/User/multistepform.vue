<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
    steps: {
        type: Array,
        default: () => []
    },
    currentStep: Number,
    id: String,
    action: String,
    method: String,
    onComplete: {
        type: Function,
        default: () => {}
    }
});

const emits = defineEmits(['validateStep', 'onComplete', 'updateStep']);

const activeStepIndex = ref(props.currentStep - 1);

watch(() => props.currentStep, (newVal) => {
    activeStepIndex.value = newVal - 1;
    console.log(`Active step index changed to: ${activeStepIndex.value}`);
});

const submitStep = () => {
    if (!props.steps[activeStepIndex.value]?.step_valid) {
        emits('validateStep', activeStepIndex.value + 1);
        return false;
    }
    let isLastStep = (activeStepIndex.value === props.steps.length - 1);
    if (isLastStep && props.action) {
        submitForm();
        return true;
    }
    if (isLastStep) {
        emits('onComplete');
        return true;
    }
    activeStepIndex.value++;
    while (props.steps[activeStepIndex.value]?.step_skip === true) {
        activeStepIndex.value++;
    }
    emits('updateStep', activeStepIndex.value + 1);
};

const submitForm = () => {
    // api call to submit all data via post request
    // redirect to somewhere
};
</script>

<template>
    <form :id="id" :action="action" :method="method" @submit.prevent="submitStep">
        <slot name="header" />

        <div 
        v-for="(step, index) in steps" 
        :key="index" 
        :id="'step'+(index+1)" 
        v-show="activeStepIndex === index"
        class="vue-form-step">

            <slot :name="'step'+(index+1)" /> 

        </div>

        <slot name="footer">
        <button type="submit">Next</button>
        </slot>
    </form>
</template>
