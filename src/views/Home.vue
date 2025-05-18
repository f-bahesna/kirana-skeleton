<template>
  <Navbar />
  <Hero />
  <Footer />
</template>

<script type="text/javascript">

import Navbar from '@/modules/Shared/Components/Navbar.vue'
import Hero from '@/modules/Shared/Components/Hero.vue';
import Footer from '@/modules/Shared/Components/Footer.vue';

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Footer
  }
}
</script>

<style scoped></style>