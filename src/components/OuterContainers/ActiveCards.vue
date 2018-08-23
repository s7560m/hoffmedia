<template>
  <b-container fluid>
    <b-row v-for="activeCard in $store.state.ActiveCards">
      <b-col>
        <ActiveButton :text="activeCard.text"></ActiveButton>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ActiveButton from './InnerContainers/ActiveButton'
  import Card from './InnerContainers/Card'
  import SideButton from './InnerContainers/SideButton'
  export default {
    name: "ActiveCards",
    components: {
      ActiveButton,
      Card,
      SideButton
    }
  }
</script>

<style scoped>

</style>
