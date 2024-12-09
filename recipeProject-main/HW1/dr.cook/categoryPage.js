import { data } from './recipePage.js';

export function showRecipesByCategory(category, container) {
    const recipes = data.filter(recipe => 
        recipe.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
    );
    
    console.log('Category:', category);
    console.log('Found recipes:', recipes);
    
    let html = `
    <div class="dark:bg-[#202124] h-25 w-full">
        <h1 class="dark:text-white text-center text-3xl font-pacifico text-gray-800 pt-5">
            ${category} Recipes
        </h1>
    </div>`;

    if (recipes.length === 0) {
        html += `
        <div class="dark:bg-[#202124] p-8 text-center">
            <p class="dark:text-white text-xl">No recipes found for this category.</p>
        </div>`;
    } else {
        html += `
        <div class="dark:bg-[#202124] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        ${recipes.map(recipe => `
            <div class="dark:bg-[#2A3236] bg-[#FFF6E0] p-6 rounded-lg shadow-lg border border-amber-800 dark:border-white">
                <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h2 class="dark:text-white text-2xl font-bold mb-2 text-amber-800">${recipe.name}</h2>
                <p class="dark:text-white text-gray-600 mb-4">${recipe.description}</p>
                <div class="flex justify-between items-center">
                    <span class="dark:text-white text-gray-500">Time: ${recipe.totalTime}</span>
                    <span class="dark:text-white text-gray-500">Difficulty: ${recipe.difficulty}</span>
                </div>
                <button onclick="selectRecipe('${recipe.name}')" class="dark:bg-slate-600 dark:hover:bg-slate-700 mt-4 w-full bg-amber-800 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
                    View Recipe
                </button>
            </div>
        `).join('')}
        </div>`;
    }

    container.innerHTML = html;
}

window.selectRecipe = function(recipeName) {
    localStorage.setItem('selectedRecipe', recipeName);
    window.location.href = '/recipePage.html';
}; 