<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    asyncInc() {
      setTimeout(() => this.count++, 1000)
    }
  }
}
</script>

<template>
  {{ count }}
  <button type="button" @click="count++">Sync++</button>
  <button type="button" @click="count--">Sync--</button>
  <button type="button" @click="asyncInc">ASync++</button>
</template>
