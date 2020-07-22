<template>
  <div id="app">
    <Vnav :type = 'type'></Vnav>
    <router-view></router-view>
  </div>
</template>

<script>
import Vnav from "./components/v-nav.vue";
import Vhome from './pages/home.vue'
import Vcell from './components/v-cell.vue'
// import Vbanner from './components/v-banner.vue'

export default {
  name: "App",
  data(){
    return {
      type:'w',
    }
  },
  components: {
    Vnav,
    Vhome,
    Vcell
    // Vbanner
  },
  watch: {
    $route: {
      handler(to1) {
        let a ='/'+to1.path.split('/')[1]
        console.log(a)
        this.type=a
        this.$store.commit('movetype',a)
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>
