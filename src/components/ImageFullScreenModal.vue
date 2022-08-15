<template>
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
</template>


<script>
export default {
    props:["activeImageSource"]
}
</script>