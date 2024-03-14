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
            <div>
                <p class="number">1</p>
                <p>Maak een <b>gratis</b> account aan</p>
            </div>
            <div>
                <p class="number">2</p>
                <p><b>Plaats een zoekertje</b> of neem eens een kijkje door onze <b>catalogus</b>.</p>
            </div>
            <div>
                <p class="number">3</p>
                <p><b>Gevonden</b> wat je wilt? Plaats dit dan in je <b>winkelmandje!</b></p>
            </div>
            <div>
                <p class="number">4</p>
                <p><b>Na betaling</b> wordt de <b>verhuurder</b> op de hoogte gebracht.</p>
            </div>    
            <div>
                <p class="number">5</p>
                <p>Haal je <b>materiaal</b> op bij de verhuurder en <b>begin je avontuur</b>!</p>
            </div>
        </div>
        <div class="img_segment">
            <div class="text">
                <div class="big_text">
                    <h2>Waarom Kwipper</h2>
                    <p>Ontdek Kwipper voor stressvrij huren en verhuren van kwalitatief kampmateriaal. Met handige filters vind je snel tenten, kookgerei en meer. Optimaliseer uitwisselingen, vul tekorten aan met overschotten en genereer nieuwe inkomsten voor je jeugdbeweging.</p>
                </div>
                <button>Bekijk de catalogus!</button>                
            </div>
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
        height: 30vw;
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

    .landingspage__text {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .landingspage__text p {
        color: #090D0B;
    }

    .landingspage__text .number {
        font-size: 100px;
        font-weight: 900;
        margin: 0;
        padding: 0;
        color: #809A8C;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        align-content: center;
        text-align: left;
        padding: 1em;
        margin: 0;
        background: url("../public/Images/bg.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        border-radius: 20px;
    }

    .text h2 {
        font-size: 40px;
        font-weight: 900;
        margin: 0;
        padding: 0;
        color: #2B5740;
    }

    .text p {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
        padding: 0;
        max-width: 729px;
        color: #090D0B;
    }

    .text button {
        display: flex;
        border-radius: 12px;
        max-width: 200px;
        background-color: #1C98D6;
        color: #F0F2F1;
    }

    .big_text {
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 1em;
        background-color: #F0F2F1;
        border-radius: 12px;
        max-width: 839px;
    }
</style>