<template>
    <div class="row m-0">
        <div class="col-12">
            <loading-spinner v-if="!load"></loading-spinner>
            <div v-else class="container">
                <h1 class="h5 mt-3 text-uppercase">{{carDetail.title}}</h1>
                <div class="row">
                    <div class="col-lg-8 col-xs-12 mb-3">
                        <car-image-slider :carImages="carImages"></car-image-slider>
                    </div>
                    <div class="col-lg-4 col-xs-12 car-infos mb-3">
                        <div class="card p-3">
                            <h5 class="h5 text-danger font-weight-bold">{{carDetail.priceFormatted}}</h5>
                            <p class="font-weight-bold h6 mb-3">{{carDetail.location.cityName}} / {{carDetail.location.townName}}</p>
                            <p class="mb-1"><strong>İlan No:</strong> <span>{{carDetail.id}}</span></p>
                            <p class="mb-1"><strong>İlan Tarihi:</strong> <span>{{carDetail.dateFormatted}}</span></p>
                            <p class="mb-1"><strong>Model:</strong> <span>{{carDetail.modelName}}</span></p>
                            <p class="mb-1"><strong>Yıl:</strong> <span>{{carDetail.properties[2].value}}</span></p>
                            <p class="mb-1"><strong>Kilometre:</strong> <span>{{carDetail.properties[0].value}}</span></p>
                            <p class="mb-1"><strong>Vites Tipi:</strong> <span>{{carDetail.properties[3].value}}</span></p>
                            <p class="mb-1"><strong>Yakıt Tipi:</strong> <span>{{carDetail.properties[4].value}}</span></p>
                        </div>
                        <div class="card p-3 mt-2">
                                <h5 class="text-center h6 font-weight-bold">{{carDetail.userInfo.nameSurname}}</h5>
                                <button class="mt-2 btn btn-secondary"><a class="text-light" :href="'tel:'+carDetail.userInfo.phone">{{carDetail.userInfo.phoneFormatted}}</a></button>
                        </div>
                    </div>
                </div>
                
                <div class="card p-3">
                     <h6 class="h5 text-danger mb-2">Açıklama</h6>
                     <div v-html="carDetail.text"></div>
                </div>
               
            </div>
        </div>
    </div>
</template>



<script>
import CarImageSlider from '../components/CarImageSlider.vue';

export default {
    data(){
        return{
            carDetail:{},
            load:false,
            carImages:[],
        }
    },
    components:{
        CarImageSlider
    },
    async mounted() {
        let {data}=await this.$http.get(`detail?id=${this.$route.params.id}`)
        this.carDetail=data;
        this.carImages=await data.photos;
        this.load=true;
    },
}
</script>


