<template>
  <b-container id="b-container" fluid>
    <b-row v-for="sideCard in $store.state.SideCards">
      <b-col>
        <SideButton :text="sideCard.text"></SideButton>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import SideButton from './InnerContainers/SideButton'
  export default {
    name: "SideCards",
    components: {
      SideButton
    }
  }
</script>

<style scoped>

</style>
