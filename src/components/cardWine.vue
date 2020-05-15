<template>
    <div class="main">
        <span class="price" >{{wine.price}}$</span>
       <img   :src="getImgUrl(wine.src)" v-bind:alt="wine.src" />
       <div class="description">
           <span class="location">Region: {{wine.region}}</span>

           <h2> {{wine.name}}</h2>
           <span>{{wine.sweet}}</span>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'CardWine',
        data () {
            return {
                msg: 'Locations'
            }
        },
         props: {
         wine: Object,
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
    background-color:#FAFAFA;
    /* border-radius: 5px; */
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid #7d2d3f;
}
img {
    width: 220px;
    height: auto;
    margin: auto;
    padding: 3px;
    top: -10px;
    position: relative;
}
.description {
    background: #7d2d3f;
    padding: 15px;
    height: 25%;
    display: flex;
    flex-direction: column
}

 span {
    color: #FAFAFA;
    font-family: 'EB Garamond', serif;
    margin-bottom:-5px
}
h2 {
    color: #FAFAFA;
    font-weight: 200
}
.price {
    color: #7d2d3f;
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

.location {
   color: #DCDCDC;
   text-align: right
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
    margin: 6px 0px;
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
    margin:5px 0px
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
    margin: 3px 0px 0px 0px;
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
    margin:10px 0px
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
    margin: 3px 0px 0px 0px;
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
    margin:5px 0px
}

.icon {
width: 30px;
height: auto;
top: 10px;
left: 5px
}

}
</style>