<template>
  <div class="mdDropdown"
    :class="{hover: isHover && !isOpen, 'pressed z-3': isPressed, 'open z-1': isOpen, disabled: isDisabled}">
    <div 
      class="buttonContainer"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
    >
      <div class="button">{{selectedOption}}</div>
      <i class="material-icons icon">{{computedIcon}}</i>
    </div>
    <div class="optionsAnchor">
      <div class="options z-1" v-if="isOpen">
        <div 
          class="option"
          v-for="option of computedOptions" 
          :key="option.name"
          @click="handleOptionClick(option)"
        >
          {{option.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mdDropdown',
    props: ['icon', 'options', 'isEditable', 'isDisabled', 'mouseUp', 'mouseDown', 'mouseOver', 'mouseOut'],
    data() {
      return {
        selectedOption: 'Roboto',
        isOpen: false,
        isHover: false,
        isPressed: false,
        closedOnThisClick: false,
      }
    },
    computed: {
      computedIcon() {
        return this.icon ? this.icon : 'keyboard_arrow_down'
      },
      computedOptions() {
        let computedOptions = Object.assign({}, this.options)
        delete(computedOptions[this.selectedOption])
        return computedOptions
      }
    },
    methods: {
      handleMouseUp() {
        if(!this.isDisabled) {
          this.mouseUp && this.mouseUp()
          this.isHover = true
          this.isPressed = false
          if(!this.closedOnThisClick)
            this.isOpen = !this.isOpen
          this.closedOnThisClick = false
        }
      },
      handleMouseDown() {
        if(!this.isDisabled) {
          this.mouseDown && this.mouseDown()
          this.isHover = false
          this.isPressed = true
          if(this.isOpen) {
            this.isOpen = false
            this.closedOnThisClick = true
          }
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
          this.isHover = false
          this.isPressed = false
        }
      },
      handleOptionClick(option) {
        
        option.click && option.click()
        this.selectedOption = option.name
        this.isOpen = false
      }
    }
  }
</script>

<style>
.mdDropdown {
  width: 16.0rem;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  font-size: 1.6rem;
  font-family: Roboto, Noto, sans-serif;
}
.mdDropdown.hover {
  background-color: rgba(0,0,0,0.06)
}
.mdDropdown.pressed {
  border-radius: 0.2rem;
}
.mdDropdown.open {
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom: none;
}
.mdDropdown.disabled {
  color: #ddd;
  cursor: default;
}
.mdDropdown .buttonContainer {
  display: flex;
  align-items: center;
  padding: 1.6rem 1.6rem 1.6rem 2.4rem;
}
.mdDropdown .button {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.mdDropdown .icon {
  margin-left: auto;
  font-size: 1.6rem;
}
.mdDropdown .optionsAnchor {
  position: relative;
}
.mdDropdown .options {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-height: 15.0rem;
  padding: 0.8rem 0;
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,0.1);
  overflow: auto;
  z-index: 3;
}
.mdDropdown .options::-webkit-scrollbar {
  width: 0.5rem;
}
.mdDropdown .options::-webkit-scrollbar-thumb {
  background-color: #999;
}
.mdDropdown .option {
  padding: 1.6rem 0.8rem 0.8rem 2.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.mdDropdown .option:hover {
  background-color: #f0f0f0;
}





</style>