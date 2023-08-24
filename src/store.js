import { reactive } from 'vue';
import axios from "axios";

export const store = reactive({ 
    cardArray:[]
})


export function fillCard(){
    axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0").then((response)=>{
        store.cardArray = response.data.data
        console.log("funziono")
    })
}