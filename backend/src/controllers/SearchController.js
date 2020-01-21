const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index (request, response) {
        //search all devs a radius 10km
        // filter by technology
        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json(devs);
    },
    
    async update (request, response) {
        const { id } = request.params;
        const {name, techs, latitude, longitude } = request.body;

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        };

        const devs = await Dev.findByIdAndUpdate(id, {
            name,
            techs: parseStringAsArray(techs),
            location
        });
        return response.json(devs);
    },

    async delete (request, response) {
        const { id } = request.params;
        const devs = await Dev.findByIdAndRemove(id);
        return response.json(devs);
    },
};
