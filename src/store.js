import { reactive } from 'vue';
import axios from "axios";

export const store = reactive({ 
    cardArray:[],
    archArray:[]
})


export function fillCard(archArg = null){
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0").then((response)=>{
        store.cardArray = response.data.data
        console.log("funziono")
    })
}

export function fillArch(){
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then((response)=>{
        store.archArray = response.data;
        console.log("funziono arch")
    })
}