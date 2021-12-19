<template>
  <div
    class="row g-0 border rounded overflow-hidden flex-md-row mt-4 shadow-sm h-md-250 position-relative"
  >
    <span class="hotel-review-badge badge rounded-pill bg-light text-dark">{{
      review.reviewBadge
    }}</span>

    <div class="col-auto d-none d-lg-block">
      <img :src="imgUrl" alt="" width="350" height="250" />
    </div>

    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-success">
        {{ city }}
      </strong>
      <h3 class="mb-0">{{ title }}</h3>
      <div class="mb-1 text-muted">
        {{ address }}
      </div>
      <p class="card-text mb-auto">
        Rating
        <span>
          <b>{{ review.rating }} / {{ review.rateScale }}</b></span
        >
      </p>

      <button class="btn btn-dark px-4" style="width: fit-content;">
        <span style="font-family: 'Lobster', cursive">Stay.</span>
      </button>

      <div class="hotel-price">
        <p class="mb-0">${{ price }} USD</p>
        <small>includes taxes & fees</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotel",
  props: {
    city: String,
    title: String,
    address: String,
    review: {
      rateScale: Number,
      rating: String,
      reviewBadge: String,
    },
    price: Number,
    imgUrl: String,
  },
};
</script>

<style scoped>
.hotel-review-badge {
  position: absolute;
  width: fit-content;
  top: 8px;
  left: 8px;
}
.hotel-price {
  position: absolute;
  bottom: 16px;
  right: 16px;
}

.hotel-price p {
  font-size: 18pt;
  font-weight: bold;
}
</style>
