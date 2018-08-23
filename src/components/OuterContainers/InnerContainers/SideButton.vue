<template>
  <div id="sideButton">
    <small>this is a side button</small>
  </div>
</template>

<script>
    export default {
        props: ['text'],
        name: "SideButton"
    }
</script>

<style scoped>
  #sideButton {
    height: 150px;
    background-color: cadetblue;
    outline: black 1px solid;
  }
</style>
