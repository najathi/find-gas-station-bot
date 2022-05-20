const Price = require("../models/price");

exports.getPrice = async (req, res, next) => {
    const type = req.params.type;

    try {
        const post = await Price.where('type').equals(type);

        if (!post) {
            const error = new Error("Could not find places.");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            message: "Fetched price successfully.",
            data: post,
        });

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
