<script setup>
import { ref, defineProps } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'

const props = defineProps({
    rating: {
        type: Number,
        default: 4,
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
    <div class="star-container">
        <span v-for="n in 5" :key="n" class="star" @click="setRating(n)">
            <i :class="[
                n <= ratingValue ? 'fas fa-star' : 'fas fa-star'
                , (n === 5 && n > ratingValue) ? 'white-star' : ''
                ]" :aria-label="`Star ${n}`"></i>
        </span>
    </div>
</template>

<style scoped>
.star-container {
  display: flex;
  gap: 5px;
}

.star {
  cursor: pointer;
  color: #f0c14b;
  font-size: 1rem;
}

.star :hover {
  color: #f0c14b;
}

.white-star {
  color: white;
}

.star i {
  pointer-events: none;
}
</style>
