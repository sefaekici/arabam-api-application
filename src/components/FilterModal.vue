<template>
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
</template>



<script>
export default {
    props:['maxYear','minYear','categoryID','getAxiosURL','getDatas','items']
}
</script>