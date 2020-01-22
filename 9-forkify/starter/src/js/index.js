//GLOBAL APP CONTROLLER
// import str from "./models/Search";
// //import {add as a, multiply as m, ID} from "./views/searchView";
// import * as searchView from "./views/searchView"; //Import everything
// console.log(`Ùsing imported functions ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3,5)}. ${str}`);

import Search from "./models/Search"
import Recipe from "./models/Recipe"
import * as searchView from "./views/searchView"
import {elements, renderLoader, clearLoader} from "./views/base"
/** Global State of the App
 * -Search Object
 * -Current Recipe Object
 * -Shooping List Object
 * -Liked Recipes
*/
const state = {};

// ------- SEARCH CONTROLLER
const controlSearch = async () => {
    // 1- Get query from view
    const query = searchView.getInput();

    if(query){
        // 2- New search object and add it to state
        state.search = new Search(query);

        // 3- Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4- Search for recipes
            await state.search.getResult();

            // 5- Render results in UI
            clearLoader();
            searchView.renderResults(state.search.result);
        }
        catch(error) {
            alert("Something went wrong with the Search");
            clearLoader();
        }

    }
}

elements.searchForm.addEventListener("submit", event => {
    event.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener("click", event => {
    const btn = event.target.closest(".btn-inline"); //closest element to this class
    if(btn){
        const goToPage =parseInt(btn.dataset.goto, 10); //base 10
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


// ------- RECIPE CONTROLLER
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace("#", ""); //when recipe changes
    console.log(id);

    if(id){
        // Prepare UI for changes

        //Create new Recipe Object
        state.recipe = new Recipe(id);
        

        try{
            //Get Recipe Data and parse Ingredients
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients);
            state.recipe.parseIngredients();

            //Calculate servings and time
            state.recipe.calcServings();
            state.recipe.calcTime();

            // Render Recipe
            console.log(state.recipe);
        }
        catch(error){
            alert("Error Processing Recipe");
        }

    }
}

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);
["hashchange", "load"].forEach(event => window.addEventListener(event, controlRecipe));