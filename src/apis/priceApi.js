import apiApp from "./index";

const endpoint = "price";

const priceApi = {

    getPrice: (type) => {

        return new Promise((resolve, reject) => {
            apiApp
                .get(`/${endpoint}/${type}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

};

export default priceApi;