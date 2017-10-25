<template>
  <div class="FloatingActionButton" @mouseup="handleClick">
    <div class="icon">+</div>
  </div>
</template>

<script>
export default {
  name: 'FloatingActionButton',
  props: ['handleClick'],
}
</script>

<style>
.FloatingActionButton {
  width: 56px;
  height: 56px;
  background-color: #ff4081;
  color: #fff;
  font-size: 24px;
  line-height: 56px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  border-radius: 28px;
  transition: box-shadow 230ms ease 0s;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  transition: filter 150ms ease 0s;
}
.FloatingActionButton:active {
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  filter: brightness(85%);
}
.FloatingActionButton > .icon {
  border-radius: 28px;
  transition: transform 230ms ease 0s;
}
.FloatingActionButton > .icon:active {
  transform: rotate(90deg);
}
</style>
