<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import myheader from './components/myheader'
import footer from './components/footer'

export default {
  components: {
    myheader,
    footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>