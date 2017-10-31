<template>
  <div id="app">

    <div style="display: flex">
      <mdButton
        :text="'Submit'"
        :click="buttonClick"
      />
      <mdButton id="button-raised-disabled"
        :text="'Submit'"
        :click="buttonClick"
        :isDisabled="true"
      />
    </div>
    <div style="display: flex; margin-top: 10px">
      <mdButton
        :text="'Submit'"
        :isFlat="true"
        :click="buttonClick"
      />
      <mdButton id="button-flat-disabled"
        :text="'Submit'"
        :isFlat="true"
        :click="buttonClick"
        :isDisabled="true"
      />
    </div>

    <div style="display: flex;margin-top: 10px;">
      <mdButton
        :text="'Submit'"
        :isDense="true"
        :click="buttonClick"
      />
      <mdButton id="button-raised-disabled"
        :text="'Submit'"
        :click="buttonClick"
        :isDisabled="true"
        :isDense="true"
      />
    </div>

    <div style="display: flex; margin-top: 10px">
      <mdButton
        :text="'Submit'"
        :isFlat="true"
        :isDense="true"
        :click="buttonClick"
      />
      <mdButton
        :text="'Submit'"
        :isFlat="true"
        :isDense="true"
        :click="buttonClick"
        :isDisabled="true"
      />
    </div>

    <mdDropdown 
      style="margin-top: 15px"
      :options="dropdownOptions"
    />

    <mdDropdown 
      style="margin-top: 15px"
      :options="dropdownOptions"
      :isDisabled="true"
    />

    <Fab class="fab-one"
      v-if="showFabOne" 
      :icon="'add'"
      :click="fabOneClick" />
    <FabSpeedDial class="fab-sd"
      :icon="fabSdIcon"
      :activatedIcon="fabSdActivatedIcon"
      :speedDialOptions="speedDialOptions" />

  </div>
</template>

<script>
import mdDropdown from './components/mdDropdown'
import mdButton from './components/mdButton'
import Fab from './components/Fab'
import FabSpeedDial from './components/FabSpeedDial'
export default {
  name: 'app',
  components: {
    mdButton,
    Fab,
    FabSpeedDial,
    mdDropdown
  },
  data() {
    return {
      showFabOne: true,
      fabSdIcon: 'more_vert',
      fabSdActivatedIcon: 'add',
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
      },
      dropdownOptions: {
        Calibri: {
          name: 'Calibri',
          click: ()=>{console.log('Calibri selected')}
        },
        'Courier New': {
          name: 'Courier New',
          click: ()=>{console.log('Courier New selected')}
        },
        'Helvetic Neue': {
          name: 'Helvetic Neue',
          click: ()=>{console.log('Helvetic Neue selected')}
        },
        'Times New Roman': {
          name: 'Times New Roman',
          click: ()=>{console.log('Times New Roman selected')}
        },
        Roboto: {
          name: 'Roboto',
          click: ()=>{console.log('Roboto selected')}
        },
        Verdana: {
          name: 'Verdana',
          click: ()=>{console.log('Verdana selected')}
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
    buttonClick() {

      console.log('click')
    }
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
html {
  font-size: 62.5%;
}
input, textarea, select, button {
  font: inherit;
}
#app {
  height: 100vh;
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  background-color:#fff;
  padding: 15px 0 0 15px;
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
/* .waves-effect {
  display: flex;
} */
.fab-sd .mainButton .icon {
  transition: transform 160ms ease;
}
.fab-sd .mainButton.activated .icon {
  transform: rotate(45deg)
}
.mdButton {
  margin-right: 10px;
}
</style>
