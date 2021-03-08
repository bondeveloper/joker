const { RESTDataSource } = require('apollo-datasource-rest');

class ChuckNorrisAPI extends RESTDataSource {
    constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/';
    }

    getJoke = async args => {
        return await this.get('jokes/random', args);
    }
    getCategories = async () => await this.get('jokes/categories');
}

module.exports = ChuckNorrisAPI;