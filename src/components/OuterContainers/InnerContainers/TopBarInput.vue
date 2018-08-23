<template>
  <div>
    <input title="inp" id="inp" v-model="inp"/>
  </div>
</template>

<script>
    export default {
        name: "TopBarInput",
        data () {
          return {
            inp: ''
          }
        }
    }
</script>

<style scoped>

</style>
