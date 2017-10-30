<template>
  <a class="mdButton"
    :class="computedClassObj"
    :href="computedHref"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @click="handleClick">
      <div class="animation-container"></div>
      {{text}}
  </a>
</template>

<script>
  export default {
    name: 'mdButton',
    props: ['text', 'isFlat', 'isDense', 'href', 'click', 'isDisabled'],
    data() {
      return {
        isPressed: false,
        isHover: false
      }
    },
    computed: {
      computedHref() {
        return this.href ? this.href : null
      },
      computedClassObj() {
        return {
          mdButtonFlat: this.isFlat,
          'mdButtonRaised': !this.isFlat,
          mdButtonDense: this.isDense,
          'z-1': this.isHover && !this.isFlat, 
          'z-3': this.isPressed && !this.isFlat,
          'disabled z-0': this.isDisabled
        }
      },
    },
    methods: {
      handleMouseUp() {
        if(!this.isDisabled) {
          this.mouseUp && this.mouseUp()
          this.isPressed = false
          this.isHover = true
        }
      },
      handleMouseDown() {
        if(!this.isDisabled) {
          this.mouseDown && this.mouseDown()
          this.isPressed = true
          this.isHover = false
        }
      },
      handleMouseOver() {
        if(!this.isDisabled) {
          this.mouseOver && this.mouseOver()
          this.isHover = true
        }
      },
      handleMouseOut() {
        if(!this.isDisabled) {
          this.mouseOut && this.mouseOut()
          this.isPressed = false
          this.isHover = false
        }
      },
      handleClick() {
        if(!this.isDisabled) {
          this.click && this.click()
        }
      }
    },
    mounted() {
      Waves.attach('.mdButton .animation-container')
    }
  }
</script>

<style>
.mdButton {
  position: relative;
  display: flex;
  width: min-content;
  cursor: pointer;
  height: 3.6rem;
  min-width: 6.4rem;
  border-radius: 0.3rem;
  line-height: 3.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  user-select: none;
  padding: 0 1.6rem;
}
.mdButtonRaised {
  background-color: #2196f3;
}
.mdButtonFlat {
  color: #2196f3;
}
.mdButtonDense {
  font-size: 1.3rem;
  line-height: 3.2rem;
  height: 3.2rem;
}
.mdButton .animation-container {
  position: absolute;
  border-radius: 0.3rem;
  left: 0;
  right: 0;
  height: 100%;
}
.mdButton.disabled .animation-container {
  display: none;
}
.mdButtonRaised.disabled {
  filter: grayscale(1);
}
.mdButtonRaised.disabled::before {
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  border-radius: 0.3rem;
  content: '';
  background-color: rgba(255, 255, 255, 0.7);
}
.mdButtonFlat.disabled {
  color: #c3c3c3;
}
</style>