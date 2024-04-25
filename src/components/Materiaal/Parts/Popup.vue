<script setup>
import { watchEffect, defineProps, defineEmits } from 'vue';

const props = defineProps({
  showPopup: Boolean
});

const emit = defineEmits(['update:showPopup']);


const TogglePopup = () => {
  emit('update:showPopup', false);
};

watchEffect(() => {
  console.log("Popup visibility changed to: ", props.showPopup);

  if (props.showPopup) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
</script>

<template>
    <div class="popup" v-if="showPopup">
        <div class="popup_inner">
            <slot></slot>
            <button class="button_close" @click="TogglePopup()">close</button>
        </div>
    </div>
</template>

<style scoped>
    .popup {
        position:fixed;
        width: 100%;
        height: 100%;
        background: rgba(43, 87, 64, 0.8);
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup_inner {
        position: relative;
        display: flex;
        flex-direction: column;
        background: white;
        padding: 20px;
        border-radius: 10px;
    }
</style>