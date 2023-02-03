const env = import.meta.env

import axios from "axios";
/* import header from "@/store/HTTP/header.js" // if needed */

import mutations from "@/modules/Acme/store/mutations.js";

export default {
    async fetchAcme({commit}){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            .catch(() => {})

        if (response && response.data) {
            let res = response.data

            commit(`${mutations.SET_ACME.name}`, res)
        }
    }
}