<template>
  <form class="border mt-3 p-3 rounded">
    <div class="row">
      <div class="col-md">
        <div class="form-floating">
          <vue-google-autocomplete
            id="city"
            ref="address"
            classname="form-control"
            placeholder="Choose city 🏖️"
            types="(cities)"
            v-on:placechanged="getAddressData"
          />
          <label for="city">Choose city 🏖️ </label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="checkin"
            placeholder="Check-in date"
          />
          <label for="checkin">Check-in date</label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            id="checkout"
            placeholder="Check-out date"
          />
          <label for="checkout">Check-out date</label>
        </div>
      </div>

      <div class="col-md">
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="adults"
            placeholder="Adults 👩"
            min="1"
            max="9"
          />
          <label for="adults">Adults 👩</label>
        </div>
      </div>
    </div>

    <div class="d-flex mt-3">
      <router-link to="" class="btn btn-dark btn-lg mx-auto px-5"
        >Search</router-link
      >
    </div>
  </form>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  name: "HotelSearchBox",
  components: {
    VueGoogleAutocomplete,
  },
  data() {
    return { address: "" };
  },
  mounted() {
    // To demonstrate functionality of exposed component functions
    // Here we make focus on the user input
    this.$refs.address.focus();
  },
  methods: {
    getAddressData: function (addressData, placeResultData, id) {
      console.log("hello world");
      this.address = addressData;
      console.log(addressData, placeResultData, id);
    },
  },
};
</script>
