<script setup>
    import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
    import '@fortawesome/fontawesome-free/css/all.css'
    import 'vue-datepicker-ui/lib/vuedatepickerui.css';
    import { Calendar, DatePicker } from 'v-calendar';
    import 'v-calendar/style.css';
    import adverteergratis from './GratisAdverteren.vue'
    import adverteerpremium from './PremiumAdverteren.vue'
    import {createAssortment}  from '../../apiService';
    import apiService from '../../apiService';
    import { useStore } from 'vuex';

    const store = useStore();

    const userId = store.getters.userId;
    const user = reactive({ data: null });

    const formData = reactive({

    item:{
        art_name: '',
        user: '4',
        price: '',
        waarborg: '',
        available_from: '24 mei 2024',
        available_until: '18 mei 2024',
        art_desc: '',
        art_category: '',
        condition:'',
        size: '',
        brand: '',
        complete_set: true,
        free: true,
        premium: false,
    },
    user: {
        user_id: null,
        posted_by: null,
        location: null,
    },
        // Add other form fields here
    }); console.log('formData:', formData);

    onMounted(async () => {
    if (userId) {
        const response = await apiService.getUserById(userId);
        user.data = response.data.data.user;

        //make sure to initialize the user data in the form data here
        formData.user.user_id = user.data._id;
        formData.user.posted_by = user.data.first_name + ' ' + user.data.last_name; 
        formData.user.location = user.data.gemeente;
        console.log('User data:', user.data);
    }
    });


    
    /* attempt at trying to showcase how many items there are in the database
    const data = ref(null);
    const getItemCount = async () => {
    try {
        const response = await apiService.getItemCount();
        console.log('aantal database:', response);
        data = response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };



    getItemCount();*/
    // Create a reactive state to store the radio button state
 

    // Function to update the radio button state when the event is emitted from the child component
    const updateRadioButtonState = (newValue) => {
    radioButtonState.value = newValue;
    console.log('Button state in parent component:', newValue);
    };
    
    

    // Method to handle form submission
    const submitForm = async () => {
        try {
        // Call the createAssortment function from apiService.js and pass formData.value

        const response = await createAssortment(formData);
        console.log('Assortment created successfully:', response);

        console.log('Assortment created successfully:', formData.value);

        // Clear the form after successful submission
        formData.value = {
            item:{
                art_name: '',
                user: '4',
                price: '',
                waarborg: '',
                available_from: '24 mei 2024',
                available_until: '18 mei 2024',
                art_desc: '',
                art_category: '',
                condition:'',
                size: '',
                brand: '',
                complete_set: true,
                free: true,
                premium: false,
            },
            user:{
                user_id: user.data._id,
                posted_by: user.data.first_name + ' ' + user.data.last_name,
                location : user.data.gemeente,
            },
            // Reset other form fields if needed
        };
        } catch (error) {
        console.log('tried to upload:', formData);
        console.error('Error creating assortment:', error);
        // Handle error if needed
        }
    };

    onMounted(() => {
        const imageInputs = document.querySelectorAll('input[data-type="image"]');
        const reader = new FileReader();

        imageInputs.forEach(imageInput => {

            imageInput.onchange = handleImageChange;

        })

        function handleImageChange (e) {
            if (e.target.files && e.target.files[0]) {

                reader.readAsDataURL(e.target.files[0]);

                reader.onload = () => {
                    document.querySelector(`label[for="${e.target.id}"]`).style.backgroundImage = `url(${reader.result})`;
                    document.querySelector(`label[for="${e.target.id}"]`).classList.remove('example-image');
                }

            } else {
                document.querySelector(`label[for="${e.target.id}"]`).style.backgroundImage = '';
                document.querySelector(`label[for="${e.target.id}"]`).classList.add('example-image');
            }
        }
    })


</script>

<template>
    <h1 class="header-title">Plaats een advertentie</h1>
    <form @submit.prevent="submitForm">
    <div class="post-container">
        <div class="table-display">
            <div class="cell-display">
                <div class="div3" id="post-image">



                    <label 
                        style="background-image: url('/src/assets/cambg.png');"
                        class="main-image main example-image" 
                        for="header-image">
                        <i></i>
                    </label>
                    <input 
                        data-type="image" 
                        type="file" 
                        id="header-image"
                        name="art-picture" 
                        accept=".jpg, .jpeg, .png, .webp" 
                        class="hidden"
                    >

                    


                    <div class="added-images">
                            <label 
                            style="background-image: url('/src/assets/plusj.png');"
                            class="image main example-image" 
                            for="image1">
                            <i></i>
                        </label>
                        <input 
                            data-type="image" 
                            type="file" 
                            id="image1"
                            name="header-image" 
                            accept=".jpg, .jpeg, .png, .webp" 
                            class="hidden"
                        >


                        <label 
                            style="background-image: url('/src/assets/plusj.png');"
                            class="image main example-image" 
                            for="image2">
                            <i></i>
                        </label>
                        <input 
                            data-type="image" 
                            type="file" 
                            id="image2"
                            name="header-image" 
                            accept=".jpg, .jpeg, .png, .webp" 
                            class="hidden"
                        >


                        <label 
                            style="background-image: url('/src/assets/plusj.png');"
                            class="image main example-image" 
                            for="image3">
                            <i></i>
                        </label>
                        <input 
                            data-type="image" 
                            type="file" 
                            id="image3"
                            name="header-image" 
                            accept=".jpg, .jpeg, .png, .webp" 
                            class="hidden"
                        >

                        <label 
                            style="background-image: url('/src/assets/plusj.png');"
                            class="image main example-image" 
                            for="image4">
                            <i></i>
                        </label>
                        <input 
                            data-type="image" 
                            type="file" 
                            id="image4"
                            name="header-image" 
                            accept=".jpg, .jpeg, .png, .webp" 
                            class="hidden"
                        >                      
                    </div>


                </div>
            </div>
            <div class="cell-display">
                <br>
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
                    <input type="text" class="input-simple" placeholder="Aanpasbare titel:" v-model="formData.item.art_name" required>
                    <h2>Beschrijving</h2>
                    <input type="text" class="input-description" placeholder="descriptie" v-model="formData.item.art_desc" required>
                    <h2>Categorie</h2>
                    <select class="conditie" name="Conditie" v-model="formData.item.art_category" required>
                        <option value="kookpotten">Kookpotten</option>
                        <option value="servies">Servies</option>
                        <option value="bestek">Bestek</option>
                        <option value="legertenten">Legertenten</option>
                        <option value="seniortenten">Seniortenten</option>
                        <option value="patrouilletenten">Patrouilletenten</option>
                        <option value="gasbakken">Gasbakken</option>
                        <option value="tent">Tenten</option>
                        <option value="zeilen">Tentzeilen</option>
                        <option value="uitklaptafel">Uitklaptafels</option>
                        <option value="uitklapbanken">Uitklapbanken</option>
                        <option value="slaapmateriaal">Slaapmateriaal</option>
                        <option value="tafel">Gewone tafel</option>
                        <option value="gereedschap">Gereedschap</option>
                        <option value="kookmateriaal">Kookmateriaal</option>
                        <option value="kookvuur">Kookvuur</option>
                        <option value="kajak">Kajak</option>
                        <option value="kano">Kano</option>
                        <option value="fiets">Fiets</option>
                        <option value="klimuitrusting">Klim uitrusting</option>
                        <option value="kampvuurbenodigdheden">Kampvuurbenodigdheden</option>
                        <option value="partytent">Partytent</option>
                        <option value="feestverlichting">Feestverlichting</option>
                        <option value="muziekinstallatie">Muziekinstallatie</option>
                        <option value="springkastelen">Springkastelen</option>
                        <option value="projector">Projector</option>
                    </select>
                </div>
                
            </div>
            <div class="cell-display">
                
                <div class="div4">
                    <br><br><br>
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
                    <select class="conditie" name="Conditie" v-model="formData.item.condition" required>
                        <option value="1">Beschadigd</option>
                        <option value="2">Defect</option>
                        <option value="3">Matig</option>
                        <option value="4">Goed</option>
                        <option value="5">Perfect</option>
                    </select>
                    <h2>Merk</h2>
                    <select class="conditie" name="Conditie" v-model="formData.item.brand" required>
                        <option value="Dometic">Dometic</option>
                        <option value="Eurotrail">Eurotrail</option>
                        <option value="Kampa">Kampa</option>
                        <option value="Nemo">Nemo</option>
                        <option value="Outwell">Outwell</option>
                        <option value="Robens">Robens</option>
                        <option value="Vango">Vango</option>
                        <option value="Quechua">Quechua</option>
                    </select>
                </div>
                <div class="Kenmerk-rechts">
                    <h2>Formaat</h2>
                    <select class="conditie" name="Conditie" v-model="formData.item.size" required>
                        <option value="3x4m">3x4m</option>
                        <option value="4x4m">4x4m</option>
                        <option value="3x5m">3x5m</option>
                        <option value="4x6m">4x6m</option>
                        <option value="4x5m">4x5m</option>
                        <option value="5x4m">5x4m</option>
                        <option value="5x5m">5x5m</option>
                        <option value="4x8m">4x8m</option>
                        <option value="5x10m">5x10m</option>
                        <option value="6x10m">6x10m</option>
                    </select>
                    <h2>Is het product volledig?</h2>
                    <select class="conditie" name="Conditie" v-model="formData.complete_set" required>
                        <option value="true">Ja</option>
                        <option value="false">Nee</option>
                    </select>
                </div>
            </div> 
            </div>
        </div>
        <div class="table-display">
            <div class="cell-display">
                <div class="div3">
                    <h1>Prijs</h1>
                    <h2>Vraagprijs</h2>
                    <input type="text" class="input-simple" placeholder="" v-model="formData.item.price" required>
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
                    <!-- <div class="tip">
                        <i class="fa-solid fa-pen"></i>
                        <p>Tip hier</p>
                    </div> -->
                    <br><br>
                    <h2 id="waarborg">Waarborg</h2>
                    <input class="conditie" v-model="formData.item.waarborg">
                    
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
                    <adverteergratis :radioButtonState="radioButtonState" @update:radioButtonState="updateRadioButtonState" ></adverteergratis>
                    <adverteerpremium></adverteerpremium>
                </div>
                
            </div>
        </div><div class="cell-display2">
            <div class="div3">
                <h1>Totaal: € </h1>
                <button class="post" type="submit">Zet online</button><!--user_id moe worden meegegeven-->
                <button class="preview">Bekijk preview</button>
            </div>
        </div>
    </div>
    </form>
</template>

<style scoped>

    h2{
        font-family: 'museo sans';
        font-size: 1em;
    }

    .example-image {
        background-size: 50% !important;
    }

    .main{
        background-size: cover;
        background-repeat: no-repeat; 
        background-position: center;
    }

    .hidden{
        display: none;
    }

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
        top: -6.5em;
        position: relative;
    }

    .tip {
        background-color: #FFE4A1;
        text-align: center;
        border-radius: 9px;
        width: 60%;
        right: 0;
        position: relative;
        margin: 1em;
        padding: 2em;
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