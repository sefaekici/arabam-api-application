<template>
  <div class="home">
    <div class="container mt-4">
    
      <div class="col-12">
        <div class="row bg-dark mb-2">
         <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              Advert Count
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item active" href="#">20</a>
              <a class="dropdown-item" href="#">50</a>
            </div>
        </div>
          
        </div>
      </div>
      <loading-spinner v-if="!load"></loading-spinner>
      <div class="col-12" v-else>
        <div class="row">
          <car-card
            v-for="item in items"
            :carInfos="item"
            :key="item.id"
            @click.native="getCarDetail(item.id)"
          ></car-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from "../components/CarCard.vue";
export default {
  name: "Home",
  data() {
    return {
      items: [],
      load: false,
      advertsCount: 20,
    };
  },
  components: {
    CarCard,
  },
  methods: {
    getCarDetail(id) {
      this.$router.push({ name: "CarDetail", params: { id: id } });
    },
  },
  watch:{
    async advertsCount(){
      this.load=false;
      let { data } = await this.$http.get(
      `/listing?sort=1&sortDirection=0&take=${this.advertsCount}`
      );
      this.items = data;
      this.load=true;
    }
  },
  async mounted() {
    let { data } = await this.$http.get(
      `/listing?sort=1&sortDirection=0&take=${this.advertsCount}`
    );
    this.items = data;
    this.load = true;
  },
};
</script>
