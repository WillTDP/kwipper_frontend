<script setup>
import { ref, defineProps } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'

const props = defineProps({
    rating: {
        type: Number,
        default: 0,
    },
    readOnly: {
        type: Boolean,
        default: true
    }
});

let ratingValue = ref(props.rating);

function setRating(n) {
    if (!props.readOnly) {
        ratingValue.value = n;
        console.log(`Rating set to ${n}`);
    }
}
</script>

<template>
    <div>
        <span v-for="n in 5" :key="n" class="star" @click="setRating(n)">
            <i :class="n <= ratingValue ? 'fas fa-star' : 'far fa-star'" :aria-label="`Star ${n}`"></i>
        </span>
    </div>
</template>

<style scoped>
.star {
    display: flex;
    flex-direction: row;
    color: #f0c14b;
    font-size: 1m;
}
</style>
