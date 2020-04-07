<template>
    <div class="main">
        <div class="img-holder">
                   <img  :src="getImgUrl(person.src)" v-bind:alt="person.src" />
                     <div v-bind:class="classColor" class="overlay">
                    <div class="text">
                        <img class="icon" src="../assets/icon1.svg"> 
                        <img class="icon" src="../assets/icon2.svg"> 
                    </div>
            </div>
            
        </div>
            <h1>{{person.name}}</h1>
                <p>{{person.position}} in {{person.location}}</p>

    </div>
</template>

<script>
    export default {
        name: 'Person',
         props: {
         person: Object,
      },
        data () {
            return {
                msg: 'Person'
            }
        },
        methods: {
             getImgUrl(pet) {
            var images = require.context('../assets/', false, /\.png$/)
            return images('./' + pet + ".png")
        }
    },
     computed: {
                classColor: function () {
                    return {
                    'green': this.person.id % 2===0 ,
                    "red": this.person.id % 2===1
                        }
                    }
                    }
    }
</script>

<style scoped>

.main{

}
img {
    width: 100%;
    height: auto
}
h1{
    color:#3E603B;
    margin: 15px auto 0px auto
}
p{
    color:#7d2d3f;
    font-family: 'EB Garamond', serif;
    margin: 5px auto 0px auto

}
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .3s ease;
  opacity:0.9
}
.green {
  background-color: #3E603B;

}
.red {
  background-color: #7d2d3f;

}

.img-holder:hover .overlay {
  bottom: 0;
  height: 100%;
}
.img-holder {
  position: relative;
  width: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.icon {
    width: 35px;
    height:auto;
    margin:5px;
    cursor:pointer
}



/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 



}


/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {
img {
    width: 160px;
    height: auto
}
h1{
    color:#3E603B;
    font-size: 28px;
    margin: 15px auto 0px auto
}
p{
    color:#7d2d3f;
    font-family: 'EB Garamond', serif;
    margin: 5px auto 0px auto;
    font-size: 18px;

}
.icon {
    width: 25px;
    height:auto;
    margin:5px;
    cursor:pointer
}
.overlay {
  width: 160px;
  margin:auto
}
}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {

img {
    width: 120px;
    height: auto
}
h1{
    font-size: 22px;
    margin: 15px auto 0px auto
}
p{
    margin: 5px auto 0px auto;
    font-size: 14px;

}
.icon {
    width: 20px;
    height:auto;
    margin:5px;
    cursor:pointer
}
.overlay {
  width: 120px;
  margin:auto
}

}
@media (max-width: 480px) {

img {
    width: 100px;
    height: auto
}
h1{
    font-size: 20px;
    margin: 5px auto 0px auto
}
p{
    margin: 5px auto 0px auto;
    font-size: 14px;

}
.icon {
    width: 14px;
    height:auto;
    margin:5px;
    cursor:pointer
}
.overlay {
  width: 100px;
  margin:auto
}
}
</style>