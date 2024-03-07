<script setup>
</script>

<template>
    <div class="landingspage">
        <div class="landingspage__top">
            <div class="top-content">
                <div class="text-content">
                    <h1>logo</h1>
                    <h2 class="h2">Een wereld van <b style="color: yellow;">materiaal</b> binnen <b style="color: yellow;">handbereik!</b></h2>
                </div>
                <img src="../../public/Images/splash.png" alt="landingspage-header" />
            </div>
        </div>
        <div class="landingspage__text">
        </div>
    </div>
</template>

<style scoped>
    body {
        margin: 0 !important;
        padding: 0;
        box-sizing: border-box;
    }

    .landingspage__top {
        height: 100%;
    }

    .top-content {
        display: flex;
        flex-direction: column;
        justify-content: center; /* vertically center children */
        align-items: flex-start; /* align children to the left */
        align-content: center;
        height: 25vw;
    }

    .text-content {
        text-align: left;
        padding: 0;
        margin: 0 !important;
    }

    .top-content img {
        position: absolute;
        display: flex;
        align-items: top;
        justify-content: center;
        top: 64px;        
        left: 0;
        width: 100%;
        height: auto;
        z-index: -1;
    }

</style>