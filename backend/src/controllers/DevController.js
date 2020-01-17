const axios = require('axios');
    const Dev = require('../models/Dev');
    const parseStringAsArray = require('../utils/parseStringAsArray');

//funções do controller: index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            //await espera ^ para depois continuar v  
            const { name = login, avatar_url, bio } = apiResponse.data;
            /*
            Outra maneira para name = login
            if(!name){
                name = apiResponse.data.login;
            }
            */

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

        return response.json(dev);
    },

    async update(request, response) {
        const { github_username } = request.params;

        const { techs, latitude, longitude } = request.body;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        let dev = await Dev.findOneAndUpdate({ github_username }, {
            techs: techsArray,
            location,
        }, {
            new: true,
        });

        return response.json(dev);
    },

    async destroy(request, response) {
        const { github_username } = request.params;
        
        let dev = await Dev.findOneAndDelete({ github_username });
        return response.json(dev);
    }
    
    //async update - atualizar infos do dev
    //async destroy - deletar dev
};
