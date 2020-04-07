<template>
    <div class="main">
        <div class="home-group">
            <div class="home-block">
                <div class="home-wine">
                    <span class="home-title-wine">LOCAL WINE</span> <br>
                    <span class="home-subtitle">feel hospitality of the place</span> <br>
                    <a href="#wine" v-on:click="navigate('Menu')" class="home-button-wine">Wine selection</a>
                </div>
            </div>
             <div class="home-block" id='wine'>
                <!-- <img class='image' src="../assets/wine2.jpg" alt="wine image"> -->
            </div>
        </div>
     <div class="home-group">
            <div class="home-block" id='pizza'>
                <!-- <img class='image' src="../assets/pizza1.jpg" alt="wine image"> -->
               
            </div>
             <div class="home-block" >
                  <div class="home-pizza">
                    <span class="home-title-pizza">UNIQUE PIZZA</span> <br>
                    <span class="home-subtitle">prepared for you with love and care</span> <br>
                    <a href="#pizza" v-on:click="navigate('Menu')" class="home-button-pizza">Pizza selection</a>
                </div>
            </div>
        </div>
     
        <div class="description">
            <div><span class="long-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
            </div>
            <div>
                <!-- <div class="contact-holder">
                    <span class="contacts">pizza_wine@restaurant.com</span> 
                    <span class="contacts">+555 77 7439428</span> 
                    <span class="contacts">Franchescostrasse 6 Munich Germmay</span>    
                </div> -->
     
            
            </div>
        </div>

        <div class="team">
            <div class="title-holder">
                <img class="icon" src="../assets/spatula.png">
                <p>Our cheffs</p>
                <img class="icon" src="../assets/whisk.png">
            </div>
            
            <h1>MEET NINE INCREDIBLE PEOPLE WHO LOVE THEIR JOB</h1>
            <h6 class="long-cheffs"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>

                <div class="people">
                    <div v-for="person in allPersons" :key="person.id" class="person">
                        <Person   :person='person' />
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    
 import router from '../router'
  import Person from "../components/person.vue"
   import { mapGetters } from 'vuex';

    export default {
        name: 'Home',
         computed: mapGetters(['allPersons']),
          components: {
                Person
            },
        data () {
            return {
                msg: 'HOME'
            }
        },
           methods: {
            navigate(page) {
                router.push({ name: page });
            }
        }
    }
</script>

<style scoped>

.main {
    margin-top: 40px;
}
.title-holder{
    display:flex;
    margin:auto;
    width:25%;
    justify-content: center
}
.title-holder img {
    width: 100px;
    height: auto;
    opacity:0.2
}

.home-group {
    width: 90vw;
    height: 95vh ;
    display: flex;
    flex-direction: row;
    margin: auto
}
.home-group:after {
  content: "";
  display: table;
  clear: both;
}
.home-block{
height: 95vh ;
width: 50% !important;
text-align: center;
overflow:hidden;
align-items: center;

}

.home-title-wine {
color: #7d2d3f;
font-weight: 800;
font-size: 56px;
}
.home-title-pizza {
color: #3E603B;
font-weight: 800;
font-size: 56px;
}
.home-subtitle {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
}
.home-wine {
    margin:auto;
    height:100%;
    width:50%;
    align-items: center;
    display: flex;
  flex-direction: column;
  justify-content: center;
   flex-wrap: wrap;
    background-image: url("../assets/wine_draw.png");
      background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}

.home-pizza {
    margin:auto;
    height:100%;
    width:50%;
    align-items: center;
    display: flex;
  flex-direction: column;
  justify-content: center;
   flex-wrap: wrap;
    background-image: url("../assets/pizza_draw.png");
      background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}

.home-button-wine {
    border: 2px solid #7d2d3f;
    background: none;
    font-size: 16px;
    padding: 7px;
    cursor: pointer;
    color: #7d2d3f;
    transition: 300ms linear;
    text-decoration: none;
    /* transition: color 4000ms linear; */
}

.home-button-wine:hover{
    background:  #7d2d3f;
    color: #FAFAFA;
    transition:300ms linear;
    /* transition: color 4000ms linear; */

}

.home-button-pizza {
    border: 2px solid #3E603B;
    background: none;
    font-size: 16px;
    padding: 7px;
    cursor: pointer;
    color: #3E603B;
    transition: 300ms linear;
    text-decoration: none;
    /* transition: color 4000ms linear; */
}

.home-button-pizza:hover{
    background:  #3E603B;
    color: #FAFAFA;
    transition:  300ms linear;
    /* transition: color 4000ms linear; */

}

.image {
    height:100%;
    width:auto
}

#wine {
      background-image: url("../assets/wine2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pizza {
      background-image: url("../assets/pizza1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
}
.description {
    margin-top: 5%;
    text-align: center;
    display:block;
    width: 50%;
    margin: 5% auto;
    align-items: center;
}
.long-text {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
}

.team{
    width: 100%;
    margin: 5% auto;
    text-align: center
}
.team h1{
    font-size: 46px;
    width: 40%;
    color: #3E603B;
    text-align: center;
    margin: auto
}
.team p:nth-of-type(1){
    font-size: 26px;
   color: #3E603B

}
.long-cheffs {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    width: 50%;
    margin: 20px auto;
    font-weight:200
}
.title-holder p:after, .title-holder p:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: black;
    display:inline-block;
    margin: 5px 20px;
    background: #3E603B;
}

.team p:nth-of-type(2){
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    width: 40%;
    margin: 20px auto

}

.contacts {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    border-top: 1px solid black;
    margin-top: 60px
}
.contact-holder {
    margin-top: 30px
}
.contacts:nth-of-type(2):after, .contacts:nth-of-type(2):before {
    content:"\A";
    width:8px;
    height:8px;
    border-radius:50%;
    background: black;
    display:inline-block;
    margin: 2px 20px;
}

.people {
    display: grid;
    width: 60%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr)
}

.person {
    margin: 20px 30px;
    transition: 0.4s ease-out;
    position: relative;
}
@media (min-width: 1281px) {



}

/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 
.main {
    margin-top: 0px;
}

.image {
    height:100%;
    width:auto
}
.contacts {
    margin-top: 50px
}
.description {
    margin-top: 8%;
}

.team{
    margin: 8% auto;
}
.team h1{
    font-size: 36px;
    width: 60%;
}
.team p:nth-of-type(1){
    font-size: 26px;
   color: #3E603B

}

.long-cheffs{
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    width: 60%;
    margin: 20px auto

}
.people {
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr)
}
.person {
    margin: 20px 5px;
    transition: 0.4s ease-out;
    position: relative;
}
.title-holder img{
    width: auto;
    height: 70px;
}
.title-holder {
    width: 50%;
    margin: auto;
    justify-content: center
}

}



/* Landscape Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
.main {
    margin-top:20px;
}

.image {
    height:100%;
    width:auto
}
.contacts {
    margin-top: 50px
}
.description {
    margin-top: 8%;
}

.home-block{
height: 100% ;
width: 50% !important;

}

.home-group {
    width: 90vw;
    height: 50vh ;
    display: flex;
    flex-direction: row;
    margin: auto
}
.person {
    margin: 5px;
}

.team{
    margin: 8% auto;
}
.team h1{
    font-size: 36px;
    width: 60%;
}
.team p:nth-of-type(1){
    font-size: 26px;
   color: #3E603B

}

.long-cheffs{
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    width: 60%;
    margin: 20px auto

}
.people {
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr)
}
.title-holder img{
    width: auto;
    height: 50px;
}
.title-holder {
    width: 70%;
    margin: auto;
    justify-content: center
}

}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {

.home-title-wine, .home-title-pizza {

font-size: 36px;
}
.home-subtitle {
    font-family: 'EB Garamond', serif;
    font-size: 16px;
}

.home-wine, .home-pizza {
  background-size: 150px auto;
    width:70%;
}

.contacts {
    margin-top: 50px;
    font-size: 16px;

}
.long-text {
    font-size: 16px;
}

.description {
    margin-top: 8%;
    width: 80%
}
.main {
    margin-top:10px;
}

.team{
    margin: 8% auto;
}
.team h1{
    font-size: 28px;
    width: 60%;
}
.team p:nth-of-type(1){
    font-size: 18px;
   color: #3E603B

}
.person {
    margin: 5px;
}

.long-cheffs{
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    width: 60%;
    margin: 20px auto

}
.people {
    display: grid;
    width: 80%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr)
}
.title-holder img{
    width: auto;
    height: 40px;
}
.title-holder {
    width: 70%;
    margin: auto;
    justify-content: center
}
.title-holder p:after, .title-holder p:before {
        content:"\A";
    width:7px;
    height:7px;
    border-radius:50%;
    background: black;
    display:inline-block;
    margin: 4px 10px;
    background: #3E603B;
}



}
@media (max-width: 480px) {

.home-block{
height: 100% ;
width: 50% !important;

}

.home-group {
    width: 90vw;
    height: 50vh ;
    display: flex;
    flex-direction: row;
    margin: auto
}

.home-title-wine, .home-title-pizza {

font-size: 24px;
}
.home-subtitle {
    font-family: 'EB Garamond', serif;
    font-size: 12px;
}

.home-wine, .home-pizza {
  background-size: 100px auto;
    width:70%;
}
.description {
    width: 90%;
    margin: 10% auto;
}
.long-text {
    font-size: 14px;
}

.contacts {
    font-size: 14px;
    margin-top: 20px
}

.team{
    margin: 8% auto;
}
.team h1{
    font-size: 18px;
    width: 60%;
}
.team p:nth-of-type(1){
    font-size: 14px;
   color: #3E603B

}

.long-cheffs{
    font-family: 'EB Garamond', serif;
    font-size: 12px;
    width: 80%;
    margin: 20px auto

}
.people {
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(3, 1fr)
}
.person {
    margin: 5px;
}
.title-holder img{
    width: auto;
    height: 30px;
}
.title-holder {
    width: 80%;
    margin: auto;
    justify-content: center
}
.title-holder p:after, .title-holder p:before {
        content:"\A";
    width:5px;
    height:5px;
    border-radius:50%;
    background: black;
    display:inline-block;
    margin: 4px 10px;
    background: #3E603B;
}
}




</style>