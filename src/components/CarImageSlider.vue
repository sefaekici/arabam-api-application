<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        :data-slide-to="index"
        :class="{ 'active': activeElementIndex == index }"
        v-for="(image, index) in carImages"
        :key="index"
      ></li>
    </ol>
    <div class="carousel-inner bg-secondary">
      <div
        v-for="(image, index) in carImages"
        :key="index"
        class="carousel-item d-flex align-items-center"
        :class="{ 'active': activeElementIndex == index }"
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
      @click="setActiveSlide(-1)"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-target="#carouselExampleIndicators"
      data-slide="next"
      @click="setActiveSlide(1)"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>

    <image-full-screen-modal :activeImageSource="activeImageSource"></image-full-screen-modal>
  </div>
</template>

<script>
import ImageFullScreenModal from './ImageFullScreenModal.vue';
export default {
  components: { ImageFullScreenModal },
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
    setActiveSlide(val){
      if(val==-1){
        if(this.activeElementIndex==0){
          this.activeElementIndex=this.carImages.length-1;
        }
        else{
          this.activeElementIndex=this.carImages-1;
        }
      }
      else{
        if(this.activeElementIndex==this.carImages.length-1){
          this.activeElementIndex=0;
        }
        else{
          this.activeElementIndex=this.carImages+1;
        }
      }
    }
  },
};
</script>

<style lang="scss">
.car-image {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  transition: .3s all;
  &:hover{
    transform: scale(1.01);
  }
}

.modal-image{
    width: 100%;
}
</style>
