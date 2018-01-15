var api = {
    getRovers(){
        var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=rNmE3iEh2uXzDbZSnjYEYuOdRfyR383nBQOuMihF'
        return fetch(url).then((res) => res.json())
    },
    getLocal(){
        const fetchDataURL = 'http://127.0.0.1:4000/'
        return fetch(fetchDataURL).then((res) => res.json())
            
    },
    getTodos(){
        const fetchDataURL = 'http://127.0.0.1:4000/'
        return fetch(fetchDataURL).then((res) => res.json())
            
    }
}
module.exports = api;