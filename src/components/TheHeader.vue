<script>
    export default{

    }
</script>

<template>
    <header>
        <div class="top-container d-flex align-items-center gap-3">
            <img src="../assets/header-logo.png" alt="" class="top-logo">
            <h1 class="text-white fs-3">Yu-Gi-Oh API</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .top-container{
        background-image: url(../assets/bg-header.webp);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 1rem;

        .top-logo{
            width: 100px;
        }
    }

</style>