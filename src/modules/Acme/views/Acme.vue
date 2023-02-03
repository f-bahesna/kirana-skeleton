<template>
  <h1>Welcome to Acme Page!</h1>
  {{acme}}
</template>

<script>
import { useStore } from "vuex"
import {computed, onMounted} from "vue"

export default {
  name: "Acme",
  setup(){
    const store = useStore()

    const acme = computed( () => store.getters["acme/getAcme"])
    const fetchAcme = () => store.dispatch("acme/fetchAcme")

    onMounted(async () => {
      await fetchAcme()
    })

    return {
      acme
    }
  }
}
</script>

<style scoped>

</style>