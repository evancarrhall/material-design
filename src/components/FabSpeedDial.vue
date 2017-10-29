<template>
  <div class="FabSpeedDial">
    <Fab class="mainButton"
      :icon="computedIcon"
      :click="handleClick"
      :class="{activated: isActivated}" />
    <transition-group class="speedDialButtons" tag="div" :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <Fab class="speedDialButton"
        v-if="isActivated"
        v-for="(option, key, index) of speedDialOptions"
        :data-index="index"
        :key="option.name"
        :icon="option.icon"
        :click="() => { handleSdButtonClick(option.click) }" />
    </transition-group>
  </div>
</template>

<script>
import Fab from './Fab'
export default {
  name: 'FabSpeedDial',
  components: {Fab},
  props: ['icon', 'click', 'speedDialOptions', 'activatedIcon'],
  data() {
    return {

      isActivated: false,
      isMouseDown: false
    }
  },
  computed: {
    computedIcon() {
      if(this.activatedIcon)
        return this.isActivated ? this.activatedIcon : this.icon
      return this.icon
    }
  },
  methods: {
    handleClick() {
      this.click && this.click()
      this.isActivated = !this.isActivated
    },
    handleSdButtonClick(callback) {

      this.isActivated = false
      callback()
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      const delay = el.dataset.index * 60
      setTimeout(() => {
        el.style.opacity = 1
        el.classList.add('sd-fab-enter')
        setTimeout(() => {done()}, 150)
      }, delay)
    },
    afterEnter(el) {
      el.classList.remove('sd-fab-enter')
    },
    beforeLeave(el) {

    },
    leave(el, done) {
        el.classList.add('sd-fab-leave')
        setTimeout(() => {done()}, 150)
    },
    afterLeave(el) {
        el.classList.remove('sd-fab-leave')
    }
  }
}
</script>

<style>
.FabSpeedDial {
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
}
.mainButton {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4081;
  text-align: center;
  user-select: none;
  cursor: pointer;
  border-radius: 28px;
  transition: box-shadow 300ms ease 0s, filter 300ms ease 0s;
}
.mainButton > .wave > .icon {
  font-size: 24px;
  color: #fff;
}
.speedDialButton.Fab {
  height: 40px;
  width: 40px;
  background-color: #fff;
  margin-bottom: 14px;
}
.speedDialButton.Fab.hover .animation-container::after {
  background-color: rgba(0, 0, 0, 0.15)
}
.speedDialButtons {
  display: flex;
  flex-flow: column-reverse;
}
.speedDialButton.Fab .icon {
  color: #717672;
}
.sd-fab-enter {
  animation: scale-in 150ms;
}
@keyframes scale-in {
  0% {
    transform: scale(0, 0)
  }
  100% {
    transform: scale(1, 1)
  }
}
.sd-fab-leave {
  animation: fade-out 150ms;
}
@keyframes fade-out {
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
}
</style>
