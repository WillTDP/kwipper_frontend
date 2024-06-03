<script setup>

</script>

<template>
    <footer>
        <div class="footer">
            <div>
                <h2 class="newsletter-title">Abonneer op onze nieuwsbrief</h2>
                <form class="newsletter-input">
                    <input type="email" placeholder="Vul hier je email adres in" class="emailinput"/>
                    <button class="subscribe" type="submit">
                        Abonneer   
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="8" viewBox="0 0 19 8" fill="none" class="svg-icon">
                            <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464466C14.9763 0.269204 14.6597 0.269204 14.4645 0.464466C14.2692 0.659728 14.2692 0.976311 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53553C14.6597 7.7308 14.9763 7.7308 15.1716 7.53553L18.3536 4.35355ZM0 4.5L18 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
                        </svg>
                    </button>
                </form>
                <small id="copyright-info">Copyright Kwipper © 2024</small>
            </div>
            <div>
                <div class="contact">
                    <h3 id="contact-title">Contact</h3>
                    <a class="white-link" href="mailto:info@kwipper.be">Info@kwipper.be</a>
                    <p>+032 88 59 3663</p>
                </div>
                <div class="socials">
                    <a href="https://www.instagram.com/kwipper.be/" target="_blank" rel="noopener noreferrer" aria-label="Kwipper on Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M17.9688 2.91797H7.96875C5.20733 2.91797 2.96875 5.15654 2.96875 7.91797V17.918C2.96875 20.6794 5.20733 22.918 7.96875 22.918H17.9688C20.7302 22.918 22.9688 20.6794 22.9688 17.918V7.91797C22.9688 5.15654 20.7302 2.91797 17.9688 2.91797Z" stroke="#F0F2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.9685 12.2878C17.0919 13.12 16.9497 13.97 16.5622 14.7168C16.1747 15.4636 15.5616 16.0692 14.8101 16.4475C14.0586 16.8257 13.2069 16.9574 12.3762 16.8237C11.5456 16.69 10.7782 16.2979 10.1833 15.7029C9.58837 15.108 9.19619 14.3407 9.06252 13.51C8.92886 12.6793 9.06052 11.8277 9.43878 11.0762C9.81704 10.3246 10.4226 9.71152 11.1694 9.32402C11.9162 8.93652 12.7662 8.79437 13.5985 8.91778C14.4474 9.04367 15.2333 9.43925 15.8402 10.0461C16.447 10.6529 16.8426 11.4389 16.9685 12.2878Z" stroke="#F0F2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.4688 7.41797H18.4788" stroke="#F0F2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></a>
                    <a href="https://www.threads.net/@kwipper.be" target="_blank" rel="noopener noreferrer" aria-label="Kwipper on Threads">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.44962 4.623C6.99662 2.974 9.23963 2 12.0166 2C16.5816 2 19.6086 4.631 20.5666 8.277C20.634 8.5336 20.5967 8.80644 20.4629 9.03552C20.329 9.2646 20.1097 9.43113 19.8531 9.4985C19.5965 9.56586 19.3237 9.52854 19.0946 9.39473C18.8655 9.26092 18.699 9.0416 18.6316 8.785C17.9046 6.022 15.6756 4 12.0156 4C9.72962 4 8.03562 4.789 6.90962 5.99C5.77362 7.202 5.14062 8.913 5.14062 10.875V13.125C5.14062 15.087 5.77362 16.798 6.90962 18.009C8.03562 19.212 9.72962 20 12.0156 20C13.6706 20 14.9836 19.616 15.9916 18.995C17.0066 18.37 17.6116 17.541 17.7816 16.59C17.9766 15.494 17.7366 14.742 17.3236 14.199C17.0967 13.9072 16.8214 13.6566 16.5096 13.458C16.3746 14.207 16.1336 14.914 15.7696 15.468C14.4276 17.507 11.8616 17.682 10.1696 17.007C9.25363 16.642 8.46863 15.643 8.22463 14.572C8.07771 13.958 8.12703 13.3135 8.36563 12.729C8.63063 12.093 9.12163 11.551 9.82063 11.139C10.5126 10.73 11.5406 10.542 12.5596 10.514C13.1736 10.497 13.8396 10.538 14.5096 10.647C14.3696 9.997 14.1326 9.512 13.8656 9.263C13.3816 8.813 12.5796 8.496 11.7756 8.501C10.9986 8.507 10.3396 8.806 9.94563 9.436C9.80506 9.6609 9.58091 9.82076 9.32248 9.88039C9.06406 9.94003 8.79253 9.89456 8.56763 9.754C8.34272 9.61343 8.18287 9.38929 8.12323 9.13086C8.0636 8.87244 8.10906 8.6009 8.24963 8.376C9.08663 7.038 10.4656 6.511 11.7626 6.501C13.0326 6.492 14.3406 6.973 15.2286 7.799C16.1266 8.635 16.5126 10.006 16.6126 11.253C17.4866 11.634 18.3126 12.193 18.9176 12.99C19.6986 14.02 20.0346 15.348 19.7506 16.941C19.4606 18.565 18.4356 19.839 17.0406 20.698C15.6726 21.54 13.9846 22 12.0156 22C9.23962 22 6.99563 21.026 5.45063 19.377C3.91463 17.739 3.14062 15.513 3.14062 13.125V10.875C3.14062 8.487 3.91463 6.261 5.45063 4.623H5.44962ZM14.5996 12.7C13.9474 12.5589 13.2807 12.4964 12.6136 12.514C11.7226 12.538 11.0976 12.707 10.8366 12.861C10.4526 13.088 10.2866 13.319 10.2126 13.498C10.1338 13.6987 10.1205 13.9193 10.1746 14.128C10.2966 14.664 10.6996 15.066 10.9106 15.149C12.0366 15.599 13.4456 15.361 14.0986 14.369C14.3336 14.011 14.5206 13.409 14.5986 12.7H14.5996Z" fill="#F0F2F1"/>
                        </svg>
                    </a>
                    <a href="mailto:info@kwipper.be" target="_blank" rel="noopener noreferrer" aria-label="Mail Kwipper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#F0F2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#F0F2F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>          
                </div>
                <div class="links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/materiaal">Materiaal</router-link>
                    <router-link to="/verhuurder">Verhuur</router-link>
                    <router-link to="/user">Profiel</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}

footer {
  background-color: #2B5740;
  color: #F0F2F1;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 1rem; 
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: 1280px;
}

.footer > * {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
}

.footer > *:last-child {
    align-items: flex-end;
    text-align: right;
    gap: 1.5rem;
}

/* LEFT SIDE */

.newsletter-title {
    color: #F0F2F1;
    font-size: 2.25rem;
    margin: 0;
    font-family: 'Bitter', serif;
    font-weight: 600;
}

.newsletter-input {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 526px;
    width: 100%;
    border-bottom: 1px solid #F0F2F1;
}

.emailinput {
    font-size: 1rem;
    background: none;
    border: none;
    flex-grow: 1;
    color: #F0F2F1;
}

.emailinput:focus {
    outline: none;
}

.emailinput:focus::placeholder {
    color: transparent;
}

.emailinput::placeholder {
    color: #F0F2F1;
    font-size: 1rem;
}

.subscribe {
    border: none;
    border-radius: 5px;
    background: none;
    color: #F0F2F1;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem 0;
    font-weight: 400;
}

#copyright-info {
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
}

/* RIGHT SIDE */

#contact-title {
    margin: 0;
    font-size: 2rem;
    font-family: 'Amazing Slab Medium', serif;
}

.contact {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.contact > * {
    margin: 0;
}

.white-link {
    color: #F0F2F1;
    font-weight: 400;
    text-decoration: none;
}


.socials {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: right;
    gap: 1.5rem;
}

.links {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: right;
    gap: 1rem;
}

.links a {
    color: #F0F2F1;
    text-decoration: none;
    font-weight: 400;
}

/* MEDIA QUERIES */

@media screen and (max-width: 860px) {
    .footer {
        flex-direction: column;
        gap: 4rem;
    }

    .footer > * {
        align-items: center;
        text-align: center;
    }

    .footer > *:last-child {
        align-items: center;
        text-align: center;
    }
}

</style>