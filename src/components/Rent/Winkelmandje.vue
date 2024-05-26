<script setup>

</script>

<template>
    <div class="winkelmandje">
        <h1>Winkelmandje</h1>
        <div class="segments">
            <div class="stacked_segment"> 
                <div class="items">
                    <div class="item">
                        <img src="../../assets/fouragetent.png" alt="placeholder" />
                        <div class="item-info">
                            <div class="name">
                                <p>Productnaam</p>
                                <button class="remove">Verwijderen</button>
                            </div>
                            <div class="item-amount">
                            <select class="input-limited" v-model="selectedPriceValue">
                                <option value="0-5">1</option>
                                <option value="5-10">2</option>
                                <option value="10-20">3</option>
                                <option value="20-30">4</option>
                                <option value="30-40">5</option>
                            </select>            
                        </div>
                        <p>€0,00</p>
                        <p>x Dagen</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../../assets/fouragetent.png" alt="placeholder" />
                        <div class="item-info">
                            <div class="name">
                                <p>Productnaam</p>
                                <button class="remove">Verwijderen</button>
                            </div>
                            <div class="item-amount">
                                <select class="input-limited" v-model="selectedPriceValue">
                                <option value="0-5">1</option>
                                <option value="5-10">2</option>
                                <option value="10-20">3</option>
                                <option value="20-30">4</option>
                                <option value="30-40">5</option>
                                </select>            
                            </div>
                            <p>€0,00</p>
                            <p>x Dagen</p>
                        </div>
                    </div>
                </div>
                <div class="but_wait">
                    <p>Wacht! Deze gebruiker verkoopt ook:</p>
                    <div class="items">
                        <div class="item">
                            <img src="../../assets/fouragetent.png" alt="placeholder" />
                            <div class="item-info">
                                <div class="name">
                                    <p>Productnaam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overzicht">
                <h2>Overzicht</h2>
                <div class="artikelen">
                    <p>Artikelen</p>
                    <div class="artikel">
                        <p>Productnaam</p>
                        <p>€0,00</p>
                    </div>
                    <div class="artikel">
                        <p>Productnaam</p>
                        <p>€0,00</p>
                    </div>
                </div>
                <div class="total">
                    <p>Totaal</p>
                    <p>€0,00</p>
                </div>
                <button class="checkout">Verder naar bestellen</button>
            </div>

        </div>
    </div>
</template>

<style scoped>

    .winkelmandje {
        display: flex;
        flex-direction: column;
        padding: 2em;
    }

    .segments {
        display: flex;
        gap: 2em;
    }

    .stacked_segment {
        display: flex;
        flex-direction: column;
        gap: 2em;
        width: 100%;
    }

    h1 {
        color: #2b5740;
    }


    .items {
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color: #f0f2f1;
        width: 100%;
        border-radius: 12px;
    }

    .item {
        display: flex;
        gap: 1em;
        padding: 1em;
        border-radius: 9px;
        width: 100%;
    }

    .item img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 9px;
    }

    .item-info {
        display: flex;
        flex-direction: column;
        gap: 0em;
    }

    .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }

    .item-amount {
        display: flex;
        align-items: center;
    }

    .remove {
        background-color: #2b5740;
        color: white;
        border: none;
        border-radius: 9px;
        padding: 0.5em;
        margin-top: 1em;
    }

    .remove:hover {
        background-color: #1e3d2b;
    }

    .overzicht {
        display: flex;
        flex-direction: column;
        background-color: #f0f2f1;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        padding: 1em;
    }

    h2 {
        font-size: 36px;
        margin: 0;
        padding: 0;
    }

    .artikelen {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .artikel {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        font-weight: 900;
    }

    .checkout {
        background-color: #1C98D6;
        color: white;
        border: none;
        border-radius: 9px;
        padding: 0.5em;
    }

    @media screen and (max-width: 800px){

        .winkelmandje {
            padding: 1em;
        }

        .segments {
            flex-direction: column;
            gap: 2em;
        }

        .stacked_segment {
            gap: 1em;
        }

        .items {
            gap: 1em;
        }

        .item {
            gap: 1em;
        }

        .item img {
            width: 75px;
            height: 75px;
        }

        .name {
            gap: 0.5em;
        }

        .remove {
            padding: 0.25em;
        }

        .overzicht {
            gap: 1em;
            padding: 1em;
            width: auto;
        }

        .artikelen {
            gap: 0.5em;
            width: 100%;
        }

        .artikel {
            gap: 0.5em;
        }

        .total {
            gap: 0.5em;
            width: 100%;
        }

        .checkout {
            width: 100%;
        }


    }
</style>