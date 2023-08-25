<script>
    export default{     
        props:{
            cardObj: {
                type: Object, 
                required: true,         
            }
        },
    }
</script>

<template>
    <div class="card h-100">
        <img :src="cardObj.card_images[0].image_url_small" class="card-img-top" alt="">
        <div class="card-body text-center d-flex flex-column">
            <h5 class="card-title">{{cardObj.name}}</h5>
            <p class="card-text mt-auto">{{cardObj.archetype}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../styles/partials/variables";

    .card{
        background-color: variables.$primary-color;
    }
</style>