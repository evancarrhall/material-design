<template>
  <transition appear name="fab">
    <div class="Fab z-6"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @click="handleClick"
      :class="{'z-10 hover': isHover, 'z-12': isMouseDown}">
      <div class="animation-container">
        <i class="icon material-icons">{{icon}}</i>
      </div> 
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Fab',
  props: ['icon', 'click', 'mouseUp', 'mouseDown', 'mouseOver', 'mouseOut'],
  data() {
    return {

      isMouseDown: false,
      isHover: false
    }
  },
  methods: {
    handleMouseUp() {
      this.mouseUp && this.mouseUp()
      this.isMouseDown = false
      this.isHover = true
    },
    handleMouseDown() {
      this.mouseDown && this.mouseDown()
      this.isMouseDown = true
      this.isHover = false
    },
    handleMouseOver() {
      this.mouseOver && this.mouseOver()
      this.isHover = true
    },
    handleMouseOut() {
      this.mouseOut && this.mouseOut()
      this.isMouseDown = false
      this.isHover = false
    },
    handleClick() {
      this.click && this.click()
    }
  },
  mounted() {
    Waves.attach('.Fab .animation-container')
  }
}
</script>

<style>
.Fab {
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 2.8rem;
  background-color: #ff4081;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: box-shadow 300ms ease 0s;
}
.Fab.hover .animation-container::after {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  background-color: rgba(255, 255, 255, 0.2)
}
.Fab .icon {
  font-size: 2.4rem;
  color: #fff;
}
.Fab .animation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
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
