<template>
  <Navbar />
  <Hero />
</template>

<script type="text/javascript">

import Navbar from '@/modules/Shared/Components/Navbar.vue'
import Hero from '@/modules/Shared/Components/Hero.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero
  }
}
</script>

<style scoped></style>