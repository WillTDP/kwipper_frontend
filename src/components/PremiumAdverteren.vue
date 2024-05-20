<script setup>
    
    

    
  
</script>

<template>
    <div class="box">
        <div class="top-box">
            <label class="container">
                <input type="radio" name="radio" value="10" v-model="selectedRadioButton" @click="handleRadioClickPremium">
                <span class="checkmark"></span>
            </label>
            <p id="gratis">Premium</p>
            <p id="standaard">Hogere zichtbaarheid</p>
        </div>
        <div class="bottom-box">
            <i class="fa-regular fa-clock"></i>
            <p>Je post staat voor altijd online.<span id="disclaimer"> (tot je hem zelf weghaald)</span> </p>
        </div>
        <div class="bottom-box">
            <i class="fa-regular fa-eye"></i>
            <p>Sneller bekeken door klanten. </p>
        </div>
        <div class="bottom-box">
            <i class="fa-solid fa-palette"></i>
            <p>De post krijgt een opvallende kader. </p>
        </div>
        <div class="price">
            <p><strong>€10,00</strong></p>
        </div>
    </div>
</template>

<style scoped>
.box {
    width: 542px;
    height: 272px;
    background-color: #f0f2f1;
    border-radius: 9px;
    margin-left: 2%;
}

.top-box{
    display: flex;
    align-items: center; /* Vertically center the content */
    padding: 10px;
    line-height: 0.5;
    background-color: #2b5740;
    color: white;
    border-radius: 9px 9px 0px 0px;
}

/* The container */
.container {
  
  position: relative;
  
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex; /* Use flexbox for container */
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
  
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  
}

/* Create a custom radio button */
.checkmark {
    
    
    height: 30px;
    width: 30px;
    background-color: white;
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
 	
	width: 18px;
	height: 18px;
	border-radius: 50%;
	background: black;
}

#gratis {
    font-weight: bold;
    margin-left: 5%;
    font-size: 28px;
}

#standaard {
    margin-left: 30%;
    position:relative;
}

.bottom-box{
    display: flex;
    align-items: center; /* Vertically center the content */
    padding: 15px;
    height: 10px;
}

.bottom-box p {

    margin-left: 10px;
}

#disclaimer {
    font-size: 12px;
    
}

.price {
    padding-left: 15px;
    height: 15px;
    margin-bottom: -5px;
}

.price p{
    color: #2b5740;
    font-size: 24px;
}

</style>