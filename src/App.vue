<template>
  <div id="app">
    <FloatingActionButton 
      class="fab" 
      :handleClick="() => {}" />
  </div>
</template>

<script>
import FloatingActionButton from './components/FloatingActionButton'

export default {
  name: 'app',
  components: {
    FloatingActionButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
</style>
