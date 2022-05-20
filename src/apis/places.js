import { Client } from "@googlemaps/google-maps-services-js";

const PlacesApi = {

    getPlaces: (district) => {
        return new Promise((resolve, reject) => {

            Client
                .textSearch({
                    params: {
                        query: 'petrol station in ' + district,
                        locations: [{ lat: 7.7240271, lng: 81.6628733 }],
                        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                        type: "gas_station",
                        language: "en-GB",
                        opennow: true
                    },
                    timeout: 1000, // milliseconds
                })
                .then((r) => {
                    resolve(r.data.results);
                })
                .catch((e) => {
                    reject(e.response.data.error_message);
                });

        });
    },

};

export default PlacesApi;