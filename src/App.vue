<script>
  import TheHeader from "../src/components/TheHeader.vue";
  import theFooter from "../src/components/TheFooter.vue";
  import CardList from "../src/components/CardList.vue";

  export default{
    components:{
      TheHeader,
      theFooter,
      CardList,
    }
  }
  
</script>

<template>

  <TheHeader></TheHeader>
  
  <main class="pb-5">

    <div class="container">

      <CardList></CardList>
      
    </div>

  </main>

  <theFooter></theFooter>

</template>

<style lang="scss">
  @use "./styles/partials/variables";

  main{
    background-color: variables.$primary-color;
    padding-top: 3rem;
  }
</style>
