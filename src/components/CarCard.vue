<template>
    <div class="col-lg-3 col-md-4 col-xs-6 mb-3 car-card">
        <div class="card p-1">
            <div class="img-container">
                <img :src="carInfos.photo.replace('{0}','580x435')" class="card-img-top" alt="">
            </div>
            <div class="card-body">
                <div class="card-body-header w-100 d-flex align-items-center justify-content-between">
                    <span class="font-weight-bold">{{carInfos.location.cityName}}</span>
                    <span class="font-weight-bold">{{carInfos.properties[2].value}}</span>
                </div>
                <div class="row mt-2"></div>
                    <div class="col-12 p-0">
                        <p class="w-100 car-title">{{carInfos.title}}</p>
                    </div>
                <div class="price">
                    <span class="float-right text-danger font-weight-bold">{{carInfos.price}}</span>
                </div>
            </div>
        </div>
    </div>
    
</template>



<script>
export default {
    props:{
        carInfos:{
            type:Object,
        }
    },
    methods:{
        maxCharacterLimit(val,len){
            if(val.length>len){
                return val.substr(0,len) + "...";
            }
            else{
                return val;
            }
        }
    }
}
</script>

<style lang="scss">
    .car-card{
        cursor: pointer;
        &:hover{
            transition: .4s all;
            transform: scale(1.02);
            .img-container{
                img{
                    transition: .4s all;
                    transform: scale(1.01);
                }
            }
        }
    }

    

    .img-container{
        width: 100%;
        height:auto;
    }
    .card-image-top{
        width: 160px;
        height: 120px;
    }

    .car-title{
        text-transform: capitalize;
        overflow:hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
</style>
