<template>
  <b-container id="b-container" fluid>
    <b-row>
      <b-col cols="12">
        <TopBarInput></TopBarInput>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import TopBarInput from './InnerContainers/TopBarInput'
    export default {
        name: "TopBar",
        components: {
            TopBarInput
        }
    }
</script>

<style scoped>
#b-container {
  background-color: cornflowerblue;
  padding: 10px;
  outline: black 1px solid;
}
</style>
