<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="counter">
    <div>
      <h1>This is a counter page</h1>

      {{ counter.count }}
      <button type="button" @click="counter.count++">Sync++</button>
      <button type="button" @click="counter.dec">Sync--</button>
      <button type="button" @click="counter.asyncInc">ASync++</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
