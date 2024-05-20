<script setup>
    import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'vue-datepicker-ui/lib/vuedatepickerui.css';
    import { Calendar, DatePicker } from 'v-calendar';
    import 'v-calendar/style.css';
    import adverteergratis from './GratisAdverteren.vue'
    import adverteerpremium from './PremiumAdverteren.vue'
    import { createAssortment } from '../../apiService.js';

    const formData = ref({
        art_name: '',
        art_desc: '',
        art_conditie:'',
        art_cat: '',
        art_merk: '',
        art_formaat: '',
        art_compleet: '',
        art_intentie: '',
        art_prijs: '',
        art_aantal: '',
        // Add other form fields here
    });

    // Method to handle form submission
    const submitForm = async () => {
        try {
        // Call the createAssortment function from apiService.js and pass formData.value
        const response = await createAssortment(formData.value);
        console.log('Assortment created successfully:', response);
        // Clear the form after successful submission
        formData.value = {
            art_name: '',
            art_desc: '',
            art_cat: '',
            art_conditie:'',
            art_merk: '',
            art_formaat: '',
            art_compleet: '',
            art_intentie: '',
            art_prijs: '',
            art_aantal: '',
            // Reset other form fields if needed
        };
        } catch (error) {
        console.error('Error creating assortment:', error);
        // Handle error if needed
        }
    };
    
    
</script>

<template>
    <h1 class="header-title">Plaats een advertentie</h1>
    <form @submit.prevent="submitForm">
    <div class="post-container">
        <div class="table-display">
            <div class="cell-display">
                <div class="div3" id="post-image">
                    <div class="main-image">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div class="added-images">
                        <div class="image">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="image">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="image">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="image">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="cell-display">
                
                <div class="tip" id="camera-tip">
                        
                    <i class="fa-solid fa-camera"></i>
                    <p>Gebruik minimaal 4 foto's</p>
                </div>
            </div>
        </div>
        <div class="table-display">
            <div class="cell-display">
                
                <div class="div4">
                    <h1>Details</h1>
                    <h2>Titel</h2>
                    <input type="text" class="input-simple" placeholder="Aanpasbare titel:" v-model="formData.art_name">
                    <h2>Beschrijving</h2>
                    <input type="text" class="input-description" placeholder="descriptie" v-model="formData.art_desc">
                    <h2>Categorie</h2>
                    <select class="conditie" name="Conditie" v-model="formData.art_cat">
                        <option value="Kookpotten">Kookpotten</option>
                        <option value="Servies">Servies</option>
                        <option value="Bestek">Bestek</option>
                        <option value="Legertenten">Legertenten</option>
                        <option value="Seniortenten">Seniortenten</option>
                        <option value="Patrouilletenten">Patrouilletenten</option>
                        <option value="Gasbakken">Gasbakken</option>
                        <option value="Tenten">Tenten</option>
                        <option value="Verlengtafels">Verlengtafels</option>
                    </select>
                </div>
                
            </div>
            <div class="cell-display">
                
                <div class="div4">
                    <div class="tip">
                        
                        <i class="fa-solid fa-pen"></i>
                        <p>Vul zo veel mogelijk in! Dat maakt je advertentie aantrekelijker!</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="cell-display2">
            <div class="div3" id="kenmerken">
                <h1>Kenmerken</h1>
                <div class="kenmerken-container">
                    <div class="Kenmerk-links">
                    <h2>Conditie</h2>
                    <select class="conditie" name="Conditie" v-model="formData.art_conditie">
                        <option value="Beschadigd">Beschadigd</option>
                        <option value="Defect">Defect</option>
                        <option value="Matig">Matig</option>
                        <option value="Goed">Goed</option>
                        <option value="Perfect">Perfect</option>
                    </select>
                    <h2>Merk</h2>
                    <select class="conditie" name="Conditie" v-model="formData.art_merk">
                        <option value="Beschadigd">Beschadigd</option>
                        <option value="Defect">Defect</option>
                        <option value="Matig">Matig</option>
                        <option value="Goed">Goed</option>
                        <option value="Perfect">Perfect</option>
                    </select>
                </div>
                <div class="Kenmerk-rechts">
                    <h2>Formaat</h2>
                    <select class="conditie" name="Conditie" v-model="formData.art_formaat">
                        <option value="Beschadigd">Beschadigd</option>
                        <option value="Defect">Defect</option>
                        <option value="Matig">Matig</option>
                        <option value="Goed">Goed</option>
                        <option value="Perfect">Perfect</option>
                    </select>
                    <h2>Is het product volledig?</h2>
                    <select class="conditie" name="Conditie" v-model="formData.art_compleet">
                        <option value="Ja">Ja</option>
                        <option value="Nee">Nee</option>
                    </select>
                </div>
            </div> 
            </div>
        </div>
        <div class="table-display">
            <div class="cell-display">
                <div class="div3">
                    <h1>Prijs</h1>
                    <h2>Ik will...</h2>
                    <select class="conditie" name="intentie" v-model="formData.art_intentie">
                        <option value="Verhuren">Verhuren</option>
                        <option value="Verkopen">Verkopen</option>
                    </select>
                    <h2>Vraagprijs</h2>
                    <input type="text" class="input-simple" placeholder="" v-model="formData.art_prijs">
                </div>
                <div class="div4">
                    <h1>Beschikbaarheid</h1>
                    <div class="my-calendar">
                        <Calendar borderless class="Date-picker" />
                    </div>
                    
                </div>
                
            </div>
            <div class="cell-display">
                <div class="div3">
                    <div class="tip">
                        <i class="fa-solid fa-pen"></i>
                        <p>Naast verhuren kan je ook materiaal <br>verkopen!</p>
                    </div>
                    <h2>Per...</h2>
                    <select class="conditie" name="intentie" v-model="formData.art_aantal">
                        <option value="Verhuren">Verhuren</option>
                        <option value="Verkopen">Verkopen</option>
                    </select>
                    
                </div>
                <div class="div4">
                    <h1>Levering</h1>
                    <label class="container">Levering
                        <input type="radio"  name="radio">
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Ophalen
                        <input type="radio" name="radio">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="cell-display2">
            <div class="div3">
                <h1>Hoe wil je adverteren?</h1>
                <div class="adverteer-opties">
                    <adverteergratis></adverteergratis>
                    <adverteerpremium></adverteerpremium>
                </div>
                
            </div>
        </div><div class="cell-display2">
            <div class="div3">
                <h1>Totaal: € </h1>
                <button class="post" type="submit">Zet online</button>
                <button class="preview">Bekijk preview</button>
            </div>
        </div>
    </div>
    </form>
</template>

<style scoped>



    .header-title {
        font-size: 48px;
        font-family: "Bitter-ExtraBold", Helvetica;
        color: black;
        text-align: center;
    }

    .post-container {
        width: 70%;
        height: 100%;
        margin: 1% auto;
        border-radius: 9px;
        border: 1px solid black;
        padding: 5px;
    }

    .table-display {
        display: table;
        width: 100%;
    }
    .cell-display {
        display: table-cell;
        width: 50%;
    }
    .div2, .div3, .div4 {
        padding: 40px;
    }
    
    #camera-tip {
        top: 0;
        position: relative;
    }

    .tip {
        background-color: #FFE4A1;
        text-align: center;
        border-radius: 9px;
        width: 60%;
        right: 0;
        position: relative;
    }

    .tip i {
        font-size: 3rem;
    }

    #post-image {
        display: flex;
    }

    .main-image, .added-images {
        width: 50%;
    }

    .main-image {
        background-color: #f5f5f5;
        height: 300px;
        width: 300px;
        border: #9C9E9D 2px dotted;
        display: flex; /* Use flexbox for container */
        justify-content: center; /* Horizontally center the content */
        align-items: center; /* Vertically center the content */
    }

    .main-image i {
        font-size: 10rem;
        color: #9C9E9D;
    }

    .added-images {
        display: grid;
        grid-template-columns: auto auto; /* Two columns */
        grid-gap: 2px; /* Gap between grid items */
        height: 300px;
        width: 300px;
        margin-left: 2px;
    }

    .image {
        background-color: #f5f5f5;
        height: 150px;
        width: 150px;
        border: #9C9E9D 2px dotted;
        text-align: center;
        display: flex; /* Use flexbox for container */
        justify-content: center; /* Horizontally center the content */
        align-items: center; /* Vertically center the content */
    }

    .image i {
        font-size: 5rem;
        color: #9C9E9D;
    }

    input[type="text"] {
        padding-left: 10px;
        
    }

    .input-simple {
        border: none;
        
        background-color: #f5f5f5;
        border-radius: 6px;
        width: 100%;
        height: 30px;
    }

    .input-description {
        border: none;
        
        background-color: #f5f5f5;
        border-radius: 6px;
        width: 100%;
        height: 160px;
        vertical-align: top;
    }

    

    .conditie {
        border: none;
        
        background-color: #f5f5f5;
        border-radius: 6px;
        width: 100%;
        height: 30px;
    }

    .kenmerken-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .Kenmerk-links, .Kenmerk-rechts {
        width: 48%;
    }

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex; /* Use flexbox for container */
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: gray;
}



/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 30%;
	left: 30%;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: white;
}

.adverteer-opties {
    display: flex;
    
}

.post {
    color: white;
    background-color: #809A8C;
    width: 241px;
}

.preview {
    color: #2B5740;
    background-color: #F0F2F1;
    width: 241px;
    margin-left: 2%;
}

.my-calendar :deep(.vc-container) {
  background-color: #f5f5f5;
  border-radius: 9px;
}

.my-calendar :deep(.vc-title) {
  background-color: #f5f5f5;
  
}

.my-calendar :deep( .vc-base-icon) {
  background-color: #f5f5f5;
}



</style>