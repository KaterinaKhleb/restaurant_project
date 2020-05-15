<template>
    <div class="main">

        <h1 id="pizza" class="title-section-pizza"> PIZZA</h1>

        <div class="side-cont">
            <parallax :speed-factor="0.6" direction="down">
            <img class='image' src="../assets/pizza_draw.png" alt="wine image"> 
            </parallax>
        </div>

        <div class="menu-container">
            <div v-for="pizza in allPizza" :key="pizza.id" class="card">
                
                <CardPizza  v-if="pizza.src" :pizza='pizza' />

            </div>
        </div>

 

        <h1 id="wine" class="title-section-wine"> WINE</h1>

        <div class="menu-container">
           <div v-for="wine in allWine" :key="wine.id" class="card">
                
                <CardWine  v-if="wine.src" :wine='wine' />

            </div>
        </div>

    
            <div class="side-cont wine-side">
            <!-- <parallax :speed-factor="0.15" direction="up"> -->
            <img class='image wineimage' src="../assets/wine_draw.png" alt="wine image"> 
            <!-- </parallax> -->
        </div>


        

    </div>
</template>

<script>

    import CardPizza from "../components/cardPizza.vue"
    import CardWine from "../components/cardWine.vue"
    import { mapGetters } from 'vuex';
     import Parallax from 'vue-parallaxy'

    export default {
        name: 'Menu',
        computed: mapGetters(['allPizza', 'allWine']),
          components: {
                CardPizza,
                CardWine,
                Parallax
            },
        data () {
            return {
                msg: 'Menu'
            }
        },
    
        // 
    }
</script>

<style scoped>

.main {
    margin-top: 4%;
}
.title-section-pizza{
    text-align: center;
    font-size: 36px;
    color: #3E603B;
}
.title-section-wine {
    text-align: center;
    font-size: 36px;
    color: #7d2d3f;
}
h1:after, h1:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: #3E603B;
    display:inline-block;
    margin: 10px 20px;
}
.title-section-wine:after, .title-section-wine:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: #7d2d3f;
    display:inline-block;
    margin: 10px 20px;
}
.menu-container {
    display: grid;
    width: 60%;
    margin: auto;
    grid-template-columns: repeat(4, 1fr)

}


.card {
    margin: 15px;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
}


.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 40px;
  transition: 0.4s ease-out;
}
.image {
    position: absolute;
  width: 300px !important;
    height: auto !important;
    
}

.side-cont {
    width: 17%;
    display: flex;
    flex-direction: column;
    height: 80%;
    position: absolute;
    /* left:3% */
}
.side-cont:nth-of-type(1){
    left:3%
}
.wine-side{
    right:2%;
    bottom:2%;
    position: absolute;
    height:100vh
}
.wineimage {
    right:2%;
    bottom:2%;
    position: absolute;
    transition: 300ms linear;
}

.wineimage:hover {
    transform: rotate(15deg) scale(1.1, 1.1) translateY(-50px);
    transition: 300ms linear;

}

.Masthead {
    height: 3000vh !important;
}

@media (min-width: 1024px) {


.main {
    margin-top: 4%;
}
.title-section-pizza{
    text-align: center;
    font-size: 36px;
    color: #3E603B;
}
.title-section-wine {
    text-align: center;
    font-size: 36px;
    color: #7d2d3f;
}
h1:after, h1:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: #3E603B;
    display:inline-block;
    margin: 10px 20px;
}
.title-section-wine:after, .title-section-wine:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: #7d2d3f;
    display:inline-block;
    margin: 10px 20px;
}
.menu-container {
    display: grid;
    width: 60%;
    margin: auto;
    grid-template-columns: repeat(4, 1fr)

}

.card {
    margin: 15px;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
}


.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 40px;
  transition: 0.4s ease-out;
}
.image {
    position: absolute;
  width: 300px !important;
    height: auto !important;
    
}

.side-cont {
    width: 17%;
    display: flex;
    flex-direction: column;
    height: 80%;
    position: absolute;
    /* left:3% */
}
.side-cont:nth-of-type(1){
    left:3%
}
.wine-side{
    right:2%;
    bottom:2%;
    position: absolute;
    height:100vh
}
.wineimage {
    right:2%;
    bottom:2%;
    position: absolute;
    transition: 300ms linear;
}

.wineimage:hover {
    transform: rotate(15deg) scale(1.1, 1.1) translateY(-50px);
    transition: 300ms linear;

}

.Masthead {
    height: 3000vh !important;
}


}

/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 

.menu-container{
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4%

}

.card {
    margin: 5px;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
}
.image {
    position: absolute;
  width: 200px !important;
    height: auto !important;
    
}
}


/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {

.menu-container{
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4%

}

.card {
    margin: 5px;
    left: 0px;
    margin: auto

}
.image {
display: none;
    
}

}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {

.menu-container{
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 4% auto
}

.card {
    margin: 5px;
    left: 0px;
    margin: auto
}
.image {
display: none;
    
}
.card:hover {
  transform: translateY(-10px);;
}
.card:hover ~ .card {
  position: relative;
  left: 2px;
  transition: 0.4s ease-out;
}

}
@media (max-width: 480px) {

.menu-container{
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4%
}

.card {
    margin: 5px;
    left: 0px;
    margin: auto

}
.image {
display: none;
    
}
.card:hover {
  transform: none;
}
.card:hover ~ .card {
  position: relative;
  left: 0px;
  transition: 0.4s ease-out;
}
}
</style>