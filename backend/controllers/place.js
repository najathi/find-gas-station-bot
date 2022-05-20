const { Client } = require("@googlemaps/google-maps-services-js")

exports.getPlaces = async (req, res, next) => {

  const client = new Client({})

  try {

    const places = await client
      .textSearch({
        params: {
          query: 'petrol station in ' + req.params.district,
          locations: [{ lat: 7.7240271, lng: 81.6628733 }],
          key: process.env.GOOGLE_MAPS_API_KEY,
          type: "gas_station",
          language: "en-GB",
          opennow: true
        },
        timeout: 1000, // milliseconds
      })

    if (!places) {
      const error = new Error("Could not find places.");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Fetched places successfully.",
      data: places.data.results,
    });

  } catch (err) {
    // err.response.data.error_message
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
