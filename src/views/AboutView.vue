<script lang="ts">
import CounterEx from '../components/CounterEx.vue'

export default {
  components: { CounterEx },
  data() {
    return {
      msg: 'HELLO'
    }
  }
}
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <CounterEx />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
