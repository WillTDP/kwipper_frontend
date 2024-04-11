<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    steps: {
        type: Array,
        default: () => []
    },
    onComplete: {
        type: Function,
        default: () => {}
    }
});

const activeStepIndex = ref(0);

const submitStep = () => {
    if (activeStepIndex.value === props.steps.length) {
        // final step
        props.onComplete();
        return;
    }
    activeStepIndex.value++;
    while (props.steps[activeStepIndex.value]?.step_skip === true) {
        activeStepIndex.value++;
    }
};
</script>

<template>
    <form @submit.prevent="submitStep">
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