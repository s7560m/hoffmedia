<template>
  <b-container fluid>
    <b-row v-for="card in $store.state.Cards">
      <b-col>
        <Card :text="card.text"></Card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Card from './InnerContainers/Card'
  export default {
    name: "CardsContainer",
    components: {
      Card
    }
  }
</script>

<style scoped>

</style>
