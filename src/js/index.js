import Search from './models/Search';
/** Global state of the app
 * - Search ojc
 * - Current recipe obj
 * - Shopping list obj
 * - Liked recipes
 */
const state = {};

const controlSearch = async() => {
    // 1. Get query from the view.
    const query = 'pizza'; // TODO
    if (query) {
        // 2) New state obj and add to state.
        state.search = new Search(query);

        // 3) Prepare UI for results.

        // 4) Search for recipes.
        await state.search.getResults();

        // 5) Render results on UI.
        console.log(state.search.results);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

search.getResults();