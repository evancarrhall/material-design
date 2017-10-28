<template>
  <transition appear name="fab">
    <div class="Fab z-6"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mouseout="handleMouseUp"
      @click="handleClick"
      :class="{'z-12': isMouseDown}">
      <div class="wave-container">
        <i class="icon material-icons">{{icon}}</i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Fab',
  props: ['icon', 'click'],
  data() {
    return {

      isMouseDown: false
    }
  },
  methods: {
    handleMouseUp() {
      this.mouseUp && this.mouseUp()
      this.isMouseDown = false
    },
    handleMouseDown() {
      this.mouseDown && this.mouseDown()
      this.isMouseDown = true
    },
    handleClick() {
      this.click && this.click()
    }
  },
  mounted() {
    Waves.attach('.wave-container')
  }
}
</script>

<style>
.Fab {
  width: 56px;
  height: 56px;
  background-color: #ff4081;
  text-align: center;
  user-select: none;
  cursor: pointer;
  border-radius: 28px;
  transition: box-shadow 300ms ease 0s;
}
.Fab .icon {
  font-size: 24px;
  color: #fff;
}
.Fab .wave-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  height: 100%;
  width: 100%;
}
.fab-enter, .fab-leave-to {
  transform: scale(0, 0);
}
.fab-enter-active, .fab-leave-active {
  transition: transform 100ms ease;
}
</style>
