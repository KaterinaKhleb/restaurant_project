<template>
    <div class="main-place" v-bind:class="classObject">
        <h1>{{location.city}}</h1>
        <span>{{location.address}}</span>
        <div class="main-info">
            <table>
             <tr>
                <th>Mon-Fri</th>
                <th>{{location.monfri}}</th>
            </tr>
            <tr>
                <th>Saturdy</th>
                <th>{{location.saturday}}</th>
            </tr>
            <tr>
                <th>Sunday</th>
                <th>{{location.sunday}}</th>
            </tr>
            </table>
        <span class="contacts">{{location.email}}</span>
        <span class="contacts">{{location.phone}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OnePlace',
       
        data () {
            return {
                msg: 'Locations'
            }
        },
        props: {
         location: Object,
         clicked: String,
             },
             computed: {
            classObject: function () {

                return {
                'selected': this.clicked===this.location.city
    }
  }
}
    }
    
</script>

<style scoped>

.main-place {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    padding: 20px;
}
.selected {
    border: 4px solid #7d2d3f
}
h1 {
    color: #3E603B;
    text-align: center;
    border-bottom: 1px solid #3E603B;
    padding-bottom:5px;
    margin-bottom: 0;
    /* font-family: 'EB Garamond', serif; */

}
h1:after, h1:before {
    content:"\A";
    width:10px;
    height:10px;
    border-radius:50%;
    background: #3E603B;
    display:inline-block;
    margin: 5px 20px;
}
span{
    text-align: center;
    font-family: 'EB Garamond', serif;
    font-size:18px;

}
.main-info{
    width: 100%;
    display: flex;
    flex-direction:column
}

th:nth-of-type(2) {
    text-align:right;
    float:right;
    /* font-family: 'EB Garamond', serif; */
    font-weight:400

}
th:nth-of-type(1) {
    text-align:left;
    float:left;
    /* font-family: 'EB Garamond', serif; */
    font-weight:400


}
table{
    width:100%;
    margin-top: 20px;
    font-family: 'EB Garamond', serif;
    font-size: 20px
}
.contacts:nth-of-type(1){
    margin-top: 30px;
    font-size:20px;
    text-align: center;
    color: white;
   background-color: #3E603B;
   padding-top:7px;



}
.contacts:nth-of-type(2){
    /* margin-top: 3px; */
    font-size:20px;
    text-align: center;
        color: white;
   background-color: #3E603B;
   padding-bottom:7px;

}


/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 

h1 {
  font-size: 24px

}
h1:after, h1:before {
    width:6px;
    height:6px;
}
span{
    font-size:16px;

}
.main-place {
    width: 90%;
    padding: 2px;
}
th {
    font-size: 16px
}
.contacts {
    font-size: 16px !important
}
}


/* Horiz Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {


h1 {
  font-size: 24px

}
h1:after, h1:before {
    width:6px;
    height:6px;
}
span{
    font-size:16px;

}
.main-place {
    width: 90%;
    padding: 2px;
}
th {
    font-size: 16px
}
.contacts {
    font-size: 16px !important
}

}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {


h1 {
  font-size: 16px

}
h1:after, h1:before {
    width:6px;
    height:6px;
    margin: 3px 7px;

}
span{
    font-size:14px;

}
.main-place {
    width: 90%;
    padding: 2px;
}
th {
    font-size: 12px
}
.contacts {
    font-size: 12px !important
}

}
@media (max-width: 480px) {



h1 {
  font-size: 16px

}
h1:after, h1:before {
    width:6px;
    height:6px;
    margin: 3px 7px;

}
span{
    font-size:14px;

}
.main-place {
    width: 90%;
    padding: 2px;
}
th {
    font-size: 12px
}
.contacts {
    font-size: 12px !important
}


}

</style>