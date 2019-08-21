import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = "https://cors-anywhere.herokuapp.com";
        const key = "e4c8c58a95ac247c619f1ef7afd479ae";
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
            this.result = res.data.recipes;
            console.log(recipes);
        } catch (error) {
            alert(error);
        }
    }
}