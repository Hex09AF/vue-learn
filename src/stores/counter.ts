import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function inc() {
    count.value++
  }
  function dec() {
    count.value--
  }
  function asyncInc() {
    setTimeout(() => count.value++, 1000)
  }

  return { count, doubleCount, inc, dec, asyncInc }
})
