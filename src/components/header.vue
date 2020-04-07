<template>
    <div class="header">

        <div class="links"> 

            <a v-on:click="navigate('Home')">HOME</a>
            <a v-on:click="navigate('Menu')">MENU</a>

        </div>

        <img src='../assets/logo1.png' alt='logo'>

        <div class="links"> 


        <a v-on:click="navigate('Locations')">LOCATIONS</a>

        <a v-on:click="navigate('Contacts')">RESERVE</a>

        </div>



          <!-- <router-link to="/home"> HOME</router-link>
        <router-link to="/menu"> MENU</router-link>
        <router-link to="/locations">LOCATIONS</router-link>
        <router-link to="/contacts"> CONTACTS</router-link> -->
      
     
    </div>
</template>

<script>

 import router from '../router'

    export default {
        name: 'Header',
        data () {
            return {
                msg: 'HOME'
            }
        }
            ,
             methods: {
            navigate(page) {
                router.push({ name: page });
            }
        }
    }
</script>

<style scoped>


a {
    font-size: 20px;
    padding: 20px;
    margin: 0 30px;
    cursor: pointer;
    color: #7d2d3f;
    display: inline-block;
    width: 15%

}
a::after {
    content: ' ';
    display: block;
    width: 0;
    height: 2px;
    background: #7d2d3f;
    transition: width .3s;
}

a:hover::after {
    width: 115px;
}
img {
    height:auto;
    width: auto;
    max-width: 10%;
    margin: auto;
  display: block
}
.header {
    width: 100%;
    display: flex;  
}
.links {
    width: 40%;
    margin: auto;
    text-align: center
}


/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 
a {
    font-size: 18px;
    padding: 10px;
    margin: 0 10px;
    width: 30%;
    font-size: 24px

}
img {
    height:40px;
    margin: auto;
  display: block;
  max-width: 100%;
}
.header{
    margin-top: 20px;
    margin-bottom: 20px
}

a::after {
    height: 2px;
}

a:hover::after {
    width: 115px;
}

}


/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {

a {
    padding: 10px;
    margin: 0 10px;
    width: 30%;
    font-size: 24px

}
img {
    height:30px;
    margin: auto;
  display: block;
  max-width: 100%;
}
.header{
    margin-top: 20px
}

}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {

a {
    padding: 10px;
    margin: 0 10px;
    width: 30%;
    font-size: 16px

}

.header{
    margin-top: 10px
}
img {
    height:20px;
    margin: auto;
  display: block;
  max-width: 100%;
}
a::after {

    height: 1px;
}

a:hover::after {
    width: 75px;
}

}
@media (max-width: 480px) {

a {
    padding: 5px;
    margin: 0 5px;
    width: 30%;
    font-size: 14px

}
.links{
    width: 50%
}
.header{
    margin-top: 10px
}
img {
  display: none;
}
a::after {

    height: 1px;
}

a:hover::after {
    width: 50px;
}
}


</style>