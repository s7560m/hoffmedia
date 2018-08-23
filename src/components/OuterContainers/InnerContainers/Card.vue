<template>
  <div id="container">
    <small>this is a card</small>
  </div>
</template>

<script>
    export default {
        props: ['text'],
        name: "Card"
    }
</script>

<style scoped>
#container {
  padding: 60px;
  height: 200px;
  background-color: cadetblue;
  outline: black 1px solid;
}
</style>
