export default (payload) =>  ({
    headers: {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        Authorization: "Bearer " + payload.token
    }
})