<template>
  <div class="card shadow border-0 rounded-3" style="width: 18rem">
    <img :src="imgUrl" alt="" height="225" />

    <div class="card-body" style="height: 240px">
      <h5 class="card-title">{{ city }}</h5>
      <p class="card-text">
        {{ description }}
      </p>

      <a
        href="#"
        class="btn btn-dark city-stay"
        style="font-family: 'Lobster', cursive"
        >Stay.</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    city: String,
    description: String,
    imgUrl: String,
  },
};
</script>

<style scoped>
.city-stay {
  position: absolute;
  bottom: 16px;
}
</style>
