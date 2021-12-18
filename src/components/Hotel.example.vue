<template>
  <div
    class="row g-0 border rounded overflow-hidden flex-md-row mt-4 shadow-sm h-md-250 position-relative"
  >
    <span class="hotel-review-badge badge rounded-pill bg-light text-dark"
      >Exceptional</span
    >

    <div class="col-auto d-none d-lg-block">
      <img
        src="https://exp.cdn-hotels.com/hotels/60000000/59350000/59346700/59346681/7362443f_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
        alt=""
        width="350"
        height="250"
      />
    </div>

    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-success">Ha Noi</strong>
      <h3 class="mb-0">JW Marriott Hotel Hanoi</h3>
      <div class="mb-1 text-muted">B7 Giang Vo, Ba Dinh District</div>
      <p class="card-text mb-auto">
        Rating <span> <b>5.0 / 5</b></span>
      </p>

      <div class="hotel-price">
        <p class="mb-0">$159 AUD</p>
        <small>includes taxes & fees</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotel",
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
