<script>
    import { fillArch } from "../store"

    export default{
        props:{
            archObj: {
                type: Object,
                required: true
            }
        },

        mounted(){
            fillArch()
        }
    }
</script>

<template>
    <div class="select-container">
        <select class="form-select">
            <option value="" disabled selected hidden>Select Archetype</option>
            <option v-for="singleArch in archObj">{{singleArch.archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .form-select{
        width: 20%;
    }
</style>