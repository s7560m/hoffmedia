<template>
  <div id="container">
    <small>this is an active button</small>
  </div>
</template>

<script>
    export default {
        props: ['text'],
        name: "ActiveButton"
    }
</script>

<style scoped>
  #container {
    height: 200px;
    background-color: cadetblue;
    outline: black 1px solid;
  }
</style>
