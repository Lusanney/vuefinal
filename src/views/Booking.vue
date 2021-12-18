<template>
  <Navbar />

  <section class="search-section container">
    <h2>Where do you want to go ?</h2>
    <HotelSearchBox />
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HotelSearchBox from "../components/HotelSearchBox.vue";

export default {
  name: "Booking",
  components: {
    Navbar,
    HotelSearchBox,
  },
};
</script>

<style scoped></style>
