<template>
  <div class="home">
    <div class="container mt-4">
      
      <!--Filter Modal-->
      <div
        class="modal fade"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="filterModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="filterModal">Filtrele</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                  <label for="minYear">Minimum Yıl</label>
                  <input type="number" maxlength="4" minlength="4" class="form-control" id="minYear" placeholder="2022" v-model="minYear">
              </div>
              
              <div class="form-group">
                  <label for="minYear">Maksimium Yıl</label>
                  <input type="number" maxlength="4" minlength="4" class="form-control" id="minYear" placeholder="2022" v-model="maxYear">
              </div>

              <div class="form-group">
                  <label for="minYear">Kategory ID</label>
                  <input type="number" maxlength="4" minlength="4" class="form-control" id="minYear" placeholder="83081" v-model="categoryID">
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="resetFilters()"
              >
                Filtreleri Sıfırla
              </button>
              <button type="button" class="btn btn-primary" @click="getDatas()">
                Değişiklikleri Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Sort And Adverts Number-->
      <div class="col-12">
        <div class="row mb-4 mx-auto">
          <div class="dropdown">
            <button
              class="btn btn-warning dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Gönderi Sayısı
            </button>
            <div class="dropdown-menu">
              <button
                class="dropdown-item"
                :class="{ active: advertsCount == 20 }"
                @click="advertsCount = 20"
              >
                20
              </button>
              <button
                class="dropdown-item"
                :class="{ active: advertsCount == 50 }"
                @click="advertsCount = 50"
              >
                50
              </button>
            </div>
          </div>

          <div class="dropdown ml-2">
            <button
              class="btn btn-danger dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Sırala
            </button>
            <div class="dropdown-menu">
              <button
                class="dropdown-item"
                :class="{ active: sortType == 1 && sortDirection == 0 }"
                @click="setSortType(1, 0)"
              >
                Tarihe Göre Artan
              </button>
              <button
                class="dropdown-item"
                :class="{ active: sortType == 1 && sortDirection == 1 }"
                @click="setSortType(1, 1)"
              >
                Tarihe Göre Azalan
              </button>
              <button
                class="dropdown-item"
                :class="{ active: sortType == 0 && sortDirection == 0 }"
                @click="setSortType(0, 0)"
              >
                Fiyata Göre Artan
              </button>
              <button
                class="dropdown-item"
                :class="{ active: sortType == 0 && sortDirection == 1 }"
                @click="setSortType(0, 1)"
              >
                Fiyata Göre Azalan
              </button>
              <button
                class="dropdown-item"
                :class="{ active: sortType == 2 && sortDirection == 0 }"
                @click="setSortType(2, 0)"
              >
                Yıla Göre Artan
              </button>
              <button
                class="dropdown-item"
                :class="{ active: sortType == 2 && sortDirection == 1 }"
                @click="setSortType(2, 1)"
              >
                Yıla Göre Azalan
              </button>
            </div>
          </div>

          <button
            class="btn btn-primary ml-auto"
            data-toggle="modal"
            data-target="#filterModal"
          >
            <i class="fa-solid fa-filter"></i> Filtreler
          </button>
        </div>
      </div>
      <loading-spinner v-if="!load"></loading-spinner>
      <div class="col-12" v-else>
        <div class="row" v-if="items.length==0">
          <h4 class="text-center h4 text-danger" >Kriterlerinize Uygun Kayıt Bulunamadı !</h4>
        </div>
        <div class="row" v-else>
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
      sortType: 1,
      sortDirection: 0,
      minYear:null,
      maxYear:null,
      categoryID:null
    };
  },
  components: {
    CarCard,
  },
  methods: {
    getCarDetail(id) {
      this.$router.push({ name: "CarDetail", params: { id: id } });
    },
    setSortType(sortType, sortDirection) {
      this.sortType = sortType;
      this.sortDirection = sortDirection;
    },
    async getAxiosURL(){
      let url=`/listing?sort=${this.sortType}&sortDirection=${this.sortDirection}&take=${this.advertsCount}`

      if(this.minYear!=null){
        url+=`&minYear=${this.minYear}`
      }
      if(this.maxYear!=null){
        url+=`&maxYear=${this.maxYear}`
      }
      if(this.categoryID!=null){
        url+=`&categoryId=${this.categoryID}`
      }
      return url;
    },
    async getDatas() {
      let url=await this.getAxiosURL();
      this.load = false;
      let { data } = await this.$http.get(
        url
      );
      this.items = data;
      this.load = true;
    },
    resetFilters(){
      this.minYear=null;
      this.maxYear=null;
      this.categoryID=null;
      this.getDatas();
    }
  },
  watch: {
    async advertsCount() {
      await this.getDatas();
    },
    async sortType() {
      await this.getDatas();
    },
    async sortDirection() {
      await this.getDatas();
    },
  },
  async mounted() {
    await this.getDatas();
  },
};
</script>
