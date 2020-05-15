<template>
    <div class="main">
        <span class="price" >{{pizza.price}} $</span>
       <img  :src="getImgUrl(pizza.src)" v-bind:alt="pizza.src" />
       <div class="description">
           <h2> {{pizza.name}}</h2>
                 <img v-if="pizza.vegan" class="icon" src="../assets/icon.png" alt="pizza image"/>
           <span>{{pizza.ingredients}}</span>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'CardPizza',
         props: {
         pizza: Object,
      },
        data () {
            return {
                msg: 'Locations'
            }
        },
        methods: {
             getImgUrl(pet) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + pet + ".png")
        }
    }
    }
</script>

<style scoped>

.main {
 width: 250px;
    height: 400px;
    background-color:#3E603B;
    /* border-radius: 5px; */
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
}
img {
    width: 180px;
    height: auto;
    margin: auto;
    top: -10px;
    position: relative;
}
.description {
    background: #FAFAFA;
    padding: 15px;
    margin: 3px;
    height: 25%;
}

 span {
    color: #3E603B;
    font-family: 'EB Garamond', serif;
}
h2 {
    margin: 10px 0px;
    color: #3E603B;
    font-weight: 600

}
.price {
    color: #FAFAFA;
    float: right;
    text-align: right;
    font-size: 18px;
    padding: 10px 10px 0px 0px
}

.icon {
width: 50px;
height: auto;
opacity: 0.3;
float: left;
top: 30px;
position: absolute;
}


/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 


}


/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {

.main {
    width: 180px;
    height: 250px;

}

img {
    width: 120px;
    height: auto;
    margin: auto;
    top: -10px;
    position: relative;
}
.description {
    padding: 10px;
    margin: 6px;
    height: 25%;
    line-height: 15px;
}

h2, span {
    font-size: 18px;
}
span{
    font-size: 14px;
}
h2 {
    margin:0px
}

.icon {
width: 30px;
height: auto;
top: 20px;
}


}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {


.main {
    width: 160px;
    height: 250px;

}

img {
    width: 120px;
    height: auto;
    margin: auto;
    top: -10px;
    position: relative;
}
.description {
    padding: 10px;
    margin: 3px;
    height: 25%;
    line-height: 15px;
}

h2, span {
    font-size: 18px
}
span{
    font-size: 14px;
}
h2 {
    margin:0px
}

.icon {
width: 30px;
height: auto;
top: 20px;
}

}
@media (max-width: 480px) {

.main {
    width: 130px;
    height: 200px;

}

img {
    width: 90px;
}
.description {
    padding: 10px;
    margin: 3px;
    height: 25%;
    line-height: 13px;
}

h2, span {
    font-size: 14px
}
span{
    font-size: 10px;
}
h2 {
    margin:0px
}

.icon {
width: 30px;
height: auto;
top: 10px;
left: 5px
}

}
</style>