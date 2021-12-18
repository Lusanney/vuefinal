<template>
  <Navbar />

  <section class="metasearch-section container">
    <h2>Metasearch page</h2>
    <HotelSearchBox />
  </section>

  <section class="hotel-section container">
    <div class="hotel-group">
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
      <Hotel />
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HotelSearchBox from "../components/HotelSearchBox.vue";
import Hotel from "../components/Hotel.example.vue";

export default {
  name: "MetaSearch",
  components: {
    Navbar,
    HotelSearchBox,
    Hotel,
  },
};
</script>

<style scoped></style>
