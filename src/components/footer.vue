<script setup>

</script>

<template>
    <footer>
        <div class="footer">
            <div class="newletter">
                <div>
                    <p class="abonneer">Abonneer op onze nieuwsbrief</p>
                </div>
                <div class="newsletter_input">
                    <div class="likenandsubscribe">
                        <input type="text" placeholder="Vul hier je email adres in" class="emailinput"/>
                        <button class="subscribe">Abonneer   
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8" fill="none" class="svg-icon">
                                <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5L18 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="526" height="2" viewBox="0 0 526 2" fill="none" class="line">
                        <path d="M0 1H526" stroke="#F0F2F1"/>
                    </svg>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #2B5740;
  color: #F0F2F1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
}

.newsletter {
    display: flex;
    align-items: left;
    justify-content: left;
    align-self: left;
}

.abonneer {
    display: flex;
    color: #F0F2F1;
    font-size: 36px;
    margin-bottom: 10px;
}

.newsletter_input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.likeandsubscribe {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.emailinput {
    background: none;
    border: none;
    border-radius: 5px;
    width: 410px;
    min-width: 250px;
}

.emailinput::placeholder {
    color: #F0F2F1;
}

.subscribe {
    border: none;
    border-radius: 5px;
    background: none;
    color: #F0F2F1;
    margin: 0;
    padding: 0;
}

.svg-icon {
    margin-left: 20px; /* adjust as needed */
}

.line {
    margin-top: 5px;
}

</style>