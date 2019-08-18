<template>
  <div class="mdDropdown"
    :class="{hover: isHover && !isOpen, 'pressed z-3': isPressed, 'open z-1': isOpen, disabled: isDisabled, editable: isEditable}">
    <div 
      class="buttonContainer"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
    >
      <input class="button" ref="button" readonly="readonly" :value="selectedOption"/>
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
    props: ['icon', 'options', 'defaultValue', 'isEditable', 'isDisabled', 'mouseUp', 'mouseDown', 'mouseOver', 'mouseOut'],
    data() {
      return {
        selectedOption: this.defaultValue ? this.defaultValue : '',
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
      },
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
    },
    // watch: {
    //   isEditable: {
    //     immediate: true,
    //     handler: function(val) { 
          
    //     },
    //   }
    // },
    mounted() {
      this.isEditable && this.$refs.button.removeAttribute('readonly')
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
  /* background-color: #fff; */
  font-size: 1.6rem;
  font-family: Roboto, Noto, sans-serif;
}
.mdDropdown.hover {
  background-color: rgba(0,0,0,0.06)
}
.mdDropdown.pressed {
  border-radius: 0.2rem;
  background-color: #fff;
}
.mdDropdown.open {
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom: none;
  background-color: #fff;
}
.mdDropdown.disabled {
  color: #ddd;
  cursor: default;
}
.mdDropdown .buttonContainer {
  display: flex;
  align-items: center;
}
.mdDropdown .button {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
}
.mdDropdown.editable .button {
  cursor: text;
}
.mdDropdown.editable.hover .button,
.mdDropdown.editable.pressed .button,
.mdDropdown.editable.open .button {
  border-right: 1px solid rgba(0,0,0,0.1);
}
.mdDropdown.editable .button:active {
  background-color: #fff;
  z-index: 3;
}
.mdDropdown .icon {
  margin-left: auto;
  font-size: 1.6rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
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