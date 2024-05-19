<script setup>
</script>

<template>
    <div class="landingspage">
        <div class="landingspage__top">
            <div class="top-content">
                <div class="text-content">
                    <h1 class="logo">
                        <img src="/logo.svg" alt="Kwipper Logo" >
                    </h1>
                    <h2 class="h2subtext">Een wereld van <b style="color: yellow;">materiaal</b> binnen <b style="color: yellow;">handbereik!</b></h2>
                </div>
                <img src="../../public/Images/splash.png" alt="landingspage-header" class="splash"/>
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
        max-width: 1280px;
        margin: 2em;
        padding: 0;
    }

    .text-content {
        text-align: left;
        margin: 0 6em;
        padding: 0;
        z-index: 2; /* Adjust this value as needed */
        position: relative; /* z-index only works on positioned elements */
        display: flex;
        flex-direction: column;
    }

    .logo {
        width: 521.67px;
        height: auto;
        padding: 0;
        margin: 0;
        display: flex;
    }

    .h2subtext {
        font-size: 24px;
        color: #F0F2F1;
    }

    .splash {
        position: absolute;
        display: flex;
        align-items: top;
        justify-content: center;
        top: 64px;        
        left: 0;
        width: 100%;
        height: auto;
        z-index: 1;
    }

    .landingspage__text {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;
        padding: 0;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
        max-width: 1280px;
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

    .img_segment {
        padding: 0;
        padding: 2rem;
        text-align: center;
    }

    .text {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        align-content: center;
        text-align: left;
        margin: 0 auto;
        padding: 2rem;
        background: url("../public/Images/bg.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100%;
        border-radius: 20px;    
        max-width: 1280px;
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

    @media screen and (max-width: 768px){
        .landingspage__top {
            height: 100%;
        }

        .top-content {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center; /* vertically center children */
            align-items: center; /* align children to the left */
            align-content: center;
            height: 30vw;
            max-width: 1280px;
            margin: 2em;
            padding: 0;
        }

        .text-content {
            text-align: left;
            position: relative;
            width: 100%;
            margin: 0 6em;
            padding: 0;
            z-index: 2; /* Adjust this value as needed */
            position: relative; /* z-index only works on positioned elements */
            display: flex;
            flex-direction: column;
        }

        .logo {
            width: 70vw;
            height: auto;
            padding: 0;
            margin: 0;
            display: flex;
        }

        .splash {
            display: flex;
            align-items: top;  
            width: 100vw;
            top: -35px;
            left: -50px;
            height: auto;
            width: 200vw;
            z-index: 1;
        }

        .landingspage__text {
            flex-direction: column;
        }

        .landingspage__text div {
            margin: 1em;
        }

        .text {
            padding: 1rem;
        }

        .text h2 {
            font-size: 30px;
        }

        .text p {
            font-size: 16px;
        }

        .text button {
            max-width: 150px;
        }

        .big_text {
            margin-top: 1em;
            margin-bottom: 1em;
            padding: 1em;
            background-color: #F0F2F1;
            border-radius: 12px;
            max-width: 839px;
        }
        
    }
</style>