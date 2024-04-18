<script setup>
import { ref, defineProps, defineEmits, defineEmits } from 'vue';

const props = defineProps({
    steps: {
        type: Array,
        default: () => []
    },
    id: String,
    action: String,
    method: String,
    onComplete: {
        type: Function,
        default: () => {}
    }
});

const emits = defineEmits(['validateStep', 'onComplete']);

const activeStepIndex = ref(0);

const submitStep = () => {
    if (!props.steps[activeStepIndex.value]?.step_valid) {
        emits('validateStep', activeStepIndex.value);
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
        v-show="activeStepIndex===index"
        class="vue-form-step">

            <slot :name="'step'+(index+1)" /> 

        </div>

        <slot name="footer">
        <button type="submit">Next</button>
        </slot>
    </form>

</template>