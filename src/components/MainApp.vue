<template>
    <b-container id="container-two" fluid>
      <b-row>
        <b-col cols="12">
          <TopBar></TopBar>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="2">
          <SideCards></SideCards>
        </b-col>
        <b-col cols="2">
          <ActiveCards></ActiveCards>
        </b-col>
        <b-col cols="8">
          <CardsContainer></CardsContainer>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    import ActiveCards from './OuterContainers/ActiveCards'
    import CardsContainer from './OuterContainers/CardsContainer'
    import SideCards from './OuterContainers/SideCards'
    import TopBar from './OuterContainers/TopBar'
    export default {
        name: "MainApp",
        components: {
          ActiveCards,
          CardsContainer,
          SideCards,
          TopBar
        }
    }
</script>

<style scoped>

</style>
