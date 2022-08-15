<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        :class="{ active: activeElementIndex == index }"
        v-for="(image, index) in carImages"
        :key="index"
      ></li>
    </ol>
    <div class="carousel-inner bg-secondary">
      <div
        v-for="(image, index) in carImages"
        :key="index"
        class="carousel-item d-flex align-items-center"
        :class="{ active: activeElementIndex == index }"
      >
        <img
          @click="setActiveImageSource(image)"
          data-toggle="modal"
          data-target="#imageFullScreenModal"
          :src="image.replace('{0}', '800x600')"
          class="car-image mx-auto"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-target="#carouselExampleIndicators"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-target="#carouselExampleIndicators"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>

    <div
      class="modal fade"
      id="imageFullScreenModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex align-items-center justify-content-center">
            <img :src="activeImageSource" class="modal-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["carImages"],
  data() {
    return {
      activeImageSource: null,
      activeElementIndex: 0,
    };
  },
  methods: {
    setActiveImageSource(image) {
      this.activeImageSource = image.replace("{0}", "800x600");
    },
  },
};
</script>

<style>
.car-image {
  max-width: 100%;
  max-height: 100%;
}

.modal-image{
    width: 100%;
}
</style>
