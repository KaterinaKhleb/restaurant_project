<template>
    <div id="app">
   <Header />
      <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>


#app {
  border: 20px solid #3E603B;
    margin: 0 !important;
  box-sizing: border-box;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;

}


/* Tablet horiz to vertical
===============================*/
@media (min-width: 1024px) and (max-width: 1280px)  { 

#app {
  border: 17px solid #3E603B;
}


}

/* Landscape Tablet to Desktop
===============================*/
@media (min-width: 768px) and (max-width: 1023px) {

#app {
  border:14px solid #3E603B;
}


}


/* Mobile to Tablet Portrait
===============================*/
@media (min-width: 480px) and (max-width: 767px) {

#app {
  border: 8px solid #3E603B;
}

}
@media (max-width: 480px) {

#app {
  border: 5px solid #3E603B;
}

}
</style>