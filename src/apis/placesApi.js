import apiApp from "./index";

const endpoint = "places";

const PlacesApi = {

    getPlaces: (district) => {

        return new Promise((resolve, reject) => {
            apiApp
                .get(`/${endpoint}/${district}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

};

export default PlacesApi;