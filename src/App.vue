<template>
  <div id="app">
    <Fab
      class="fab-one"
      v-if="showFabOne" 
      :icon="'add'"
      :click="fabOneClick" />
    <FabSpeedDial
      class="fab-sd"
      :icon="'more_vert'"
      :speedDialOptions="speedDialOptions" />
  </div>
</template>

<script>
import Fab from './components/Fab'
import FabSpeedDial from './components/FabSpeedDial'
export default {
  name: 'app',
  components: {
    Fab,
    FabSpeedDial
  },
  data() {
    return {
      showFabOne: true,
      speedDialOptions: {
        comment: {
          name: 'comment',
          icon: 'mode_comment',
          click: ()=>{ console.log('comment') }
        },
        edit: {
          name: 'edit',
          icon: 'edit',
          click: ()=>{ console.log('edit') }
        },
        title: {
          name: 'title',
          icon: 'title',
          click: ()=>{ console.log('title') }
        }
      }
    }
  },
  methods: {
    fabOneClick() {

      this.showFabOne = false
      setTimeout(()=> {
        this.showFabOne = true
      }, 1000)
    },
  },
  mounted() {
      Waves.init({duration: 200})
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fab-one {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
.fab-sd {
  position: fixed;
  bottom: 24px;
  right: 100px;
}
.fab-sd .mainButton {
  background-color: #4386f0;
}
.waves-effect {
  display: flex;
}
</style>
