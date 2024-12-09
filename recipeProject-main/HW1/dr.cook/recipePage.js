const showRecipe = (element) => {
    return `
    <div class="container mx-auto px-4 py-4 sm:py-8 max-w-4xl">
        <!-- Recipe Header -->
        <div class="mb-6 sm:mb-8 text-center">
            <h1 class="dark:text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-amber-800">${element.name}</h1>
            <p class="dark:text-white text-base sm:text-lg mb-4 px-2">${element.description}</p>
            
            <!-- Time and Servings Info -->
            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm mb-4 sm:mb-6">
                <div class="flex items-center gap-2">
                    <img class="dark:hidden h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/DarkClock.png" alt="DarkClock">
                    <img class="hidden dark:block h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/LightClock.png" alt="LightClock">
                    <span class="dark:text-white text-sm">Prep: ${element.prepTime}</span>
                </div>
                <div class="flex items-center gap-2">
                    <img class="dark:hidden h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/DarkClock.png" alt="DarkClock">
                    <img class="hidden dark:block h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/LightClock.png" alt="LightClock">
                    <span class="dark:text-white text-sm">Cook: ${element.cookTime}</span>
                </div>
                <div class="flex items-center gap-2">
                    <img class="dark:hidden h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/WhiteServing.png" alt="White Serving">
                    <img class="hidden dark:block h-5 sm:h-6 w-9 sm:w-11 pl-3 sm:pl-5" src="/images/BlackServing.png" alt="Black Serving">
                    <span class="dark:text-white text-sm">Servings: ${element.servings}</span>
                </div>
            </div>

            <div class="flex justify-center items-center gap-2 mb-4">
                <span class="dark:text-white text-sm">By <span class="dark:text-slate-400 text-amber-800">${element.author}</span></span>
                <span class="dark:text-slate-400 ml-2 text-amber-800">★ ${element.rating}</span>
            </div>
        </div>

        <!-- Recipe Image and Nutrition -->
        <div class="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
            <div class="w-full sm:w-2/3">
                <img src="${element.image}" alt="${element.name}" class="w-full rounded-lg shadow-lg">
            </div>
            <div class="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg w-full sm:w-1/3">
                <h2 class="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Nutrition</h2>
                <ul class="space-y-1 sm:space-y-2 text-base sm:text-lg">
                    <li class="dark:text-white"><strong class="dark:text-white">Calories:</strong> ${element.nutrition.calories}</li>
                    <li class="dark:text-white"><strong class="dark:text-white">Protein:</strong> ${element.nutrition.protein}</li>
                    <li class="dark:text-white"><strong class="dark:text-white">Fat:</strong> ${element.nutrition.fat}</li>
                    <li class="dark:text-white"><strong class="dark:text-white">Fiber:</strong> ${element.nutrition.fiber}</li>
                    <li class="dark:text-white"><strong class="dark:text-white">Sugar:</strong> ${element.nutrition.sugar}</li>
                </ul>
            </div>
        </div>

        <!-- Ingredients -->
        <div class="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <h2 class="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Ingredients</h2>
            <ul class="dark:text-white space-y-2">
                ${element.ingredients.map(ing => `
                    <li class="flex text-base sm:text-lg justify-between">
                        <span>${ing.item}</span>
                        <span>${ing.amount} ${ing.unit}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <!-- Instructions -->
        <div class="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <h2 class="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Instructions</h2>
            <ol class="dark:text-white space-y-3 sm:space-y-4">
                ${element.instructions.map(inst => `
                    <li class="flex gap-3 sm:gap-4 text-base sm:text-lg">
                        <span class="dark:text-slate-400 font-bold text-amber-800">${inst.step}.</span>
                        <span>${inst.text}</span>
                    </li>
                `).join('')}
            </ol>
        </div>

        <!-- Tips -->
        <div class="dark:bg-[#2A3236] bg-[#FFF6E0] border border-amber-800 dark:border-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <h2 class="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Tips</h2>
            <ul class="dark:text-white list-disc list-inside space-y-2 text-base sm:text-lg">
                ${element.tips.map(tip => `
                    <li>${tip}</li>
                `).join('')}
            </ul>
        </div>

        <!-- User Rating -->
        <div class="p-4 sm:p-6 text-center">
            <h2 class="dark:text-slate-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-800">Rate this Recipe</h2>
            <div class="flex justify-center items-center gap-2">
                ${[1, 2, 3, 4, 5].map(star => `
                    <span class="dark:text-white text-2xl sm:text-3xl cursor-pointer" onclick="document.getElementById('rating-feedback').textContent = 'Thank you for rating ${star} stars!';">
                        ★
                    </span>
                `).join('')}
            </div>
        </div>
        <div id="rating-feedback" class="dark:text-white text-amber-800 text-lg sm:text-xl font-bold text-center mb-4 sm:mb-5"></div>
    </div>`;
};


const data = [
    {
        id: "001",
        name: "Cheese Lasagna",
        image: "/images/Cheese-Lasagna.jpg",
        description: "Rich and creamy homemade lasagna layered with three types of cheese, hearty marinara sauce, and perfectly cooked pasta sheets",
        prepTime: "30 minutes",
        cookTime: "45 minutes",
        totalTime: "1 hour 15 minutes",
        difficulty: "Medium",
        servings: 8,
        rating: 4.8,
        author: "Chef Maria",
        ingredients: [
            {
                id: "i1",
                item: "Lasagna sheets",
                amount: "1",
                unit: "package"
            },
            {
                id: "i2",
                item: "Ricotta cheese",
                amount: "425",
                unit: "gr"
            },
            {
                id: "i3",
                item: "Mozzarella cheese, shredded",
                amount: "4",
                unit: "cups"
            },
            {
                id: "i4",
                item: "Parmesan cheese, grated",
                amount: "1",
                unit: "cup"
            },
            {
                id: "i5",
                item: "Marinara sauce",
                amount: "680",
                unit: "gr"
            },
            {
                id: "i6",
                item: "Eggs",
                amount: "2",
                unit: "large"
            },
            {
                id: "i7",
                item: "Fresh basil",
                amount: "1/4",
                unit: "cup"
            },
            {
                id: "i8",
                item: "Salt",
                amount: "1",
                unit: "tsp"
            },
            {
                id: "i9",
                item: "Black pepper",
                amount: "1/2",
                unit: "tsp"
            }
        ],
        instructions: [
            {
                step: 1,
                text: "Preheat oven to 375°F (190°C). Grease a 9x13 inch baking dish."
            },
            {
                step: 2,
                text: "Cook lasagna sheets according to package directions. Drain and set aside."
            },
            {
                step: 3,
                text: "In a large bowl, mix ricotta cheese, 2 cups mozzarella, 1/2 cup parmesan, eggs, basil, salt, and pepper."
            },
            {
                step: 4,
                text: "Spread 1 cup of marinara sauce in the bottom of the prepared baking dish."
            },
            {
                step: 5,
                text: "Layer 3 lasagna sheets, 1/3 of the cheese mixture, and 1 cup marinara sauce. Repeat layers twice."
            },
            {
                step: 6,
                text: "Top with remaining mozzarella and parmesan cheese."
            },
            {
                step: 7,
                text: "Cover with foil and bake for 25 minutes. Remove foil and bake for additional 25 minutes until bubbly and cheese is golden brown."
            },
            {
                step: 8,
                text: "Let rest for 10-15 minutes before serving. Garnish with fresh basil if desired."
            }
        ],
        nutrition: {
            calories: 350,
            protein: "23g",
            fat: "18g",
            fiber: "3g",
            sugar: "4g"
        },
        tips: [
            "Use fresh mozzarella for best results",
            "Let the lasagna rest before cutting for cleaner slices",
            "No-boil noodles can be used to save time",
            "Can be frozen for up to 3 months"
        ],
        categories: ["Italian", "Pasta", "Vegetarian", "Comfort Food"],
        equipment: ["9x13 inch baking dish", "Large pot", "Mixing bowls", "Foil"]
    },
    {
        id: "002",
        name: "Onion Soup",
        image: "/images/Onion-Soup.jpg",
        description: "Rich and savory caramelized onion soup topped with crusty bread and melted Gruyère cheese. A classic French comfort food perfect for cold days.",
        prepTime: "20 minutes",
        cookTime: "1 hour",
        totalTime: "1 hour 20 minutes",
        difficulty: "Medium",
        servings: 6,
        rating: 4.7,
        author: "Chef Jean",
        ingredients: [
            {
                id: "i1",
                item: "Yellow onions, thinly sliced",
                amount: "6",
                unit: "large"
            },
            {
                id: "i2",
                item: "Butter",
                amount: "4",
                unit: "tsp"
            },
            {
                id: "i3",
                item: "Olive oil",
                amount: "1",
                unit: "tsp"
            },
            {
                id: "i4",
                item: "Beef broth",
                amount: "8",
                unit: "cups"
            },
            {
                id: "i5",
                item: "Dry white wine",
                amount: "1/2",
                unit: "cup"
            },
            {
                id: "i6",
                item: "Fresh thyme",
                amount: "4",
                unit: "sprigs"
            },
            {
                id: "i7",
                item: "Bay leaf",
                amount: "1",
                unit: "leaf"
            },
            {
                id: "i8",
                item: "French baguette, sliced",
                amount: "1",
                unit: "loaf"
            },
            {
                id: "i9",
                item: "Gruyère cheese, grated",
                amount: "2",
                unit: "cups"
            },
            {
                id: "i10",
                item: "Salt",
                amount: "to",
                unit: "taste"
            },
            {
                id: "i11",
                item: "Black pepper",
                amount: "to",
                unit: "taste"
            }
        ],
        instructions: [
            {
                step: 1,
                text: "In a large pot, melt butter with olive oil over medium heat. Add sliced onions."
            },
            {
                step: 2,
                text: "Cook onions for 30-40 minutes, stirring occasionally, until deeply caramelized and golden brown."
            },
            {
                step: 3,
                text: "Add wine to deglaze the pot, scraping up any browned bits from the bottom."
            },
            {
                step: 4,
                text: "Pour in beef broth, add thyme and bay leaf. Bring to a simmer."
            },
            {
                step: 5,
                text: "Reduce heat and cook for 30 minutes. Season with salt and pepper."
            },
            {
                step: 6,
                text: "Preheat broiler. Toast baguette slices until lightly golden."
            },
            {
                step: 7,
                text: "Ladle soup into oven-safe bowls, top with toasted bread and generous amount of Gruyère cheese."
            },
            {
                step: 8,
                text: "Broil until cheese is melted, bubbly, and slightly browned (2-3 minutes)."
            }
        ],
        nutrition: {
            calories: 320,
            protein: "12g",
            fat: "16g",
            fiber: "2g",
            sugar: "12g"
        },
        tips: [
            "Use yellow onions for best flavor",
            "Don't rush the caramelization process - it's key to the flavor",
            "Can substitute vegetable broth for a vegetarian version",
            "Traditional Gruyère can be replaced with Swiss cheese"
        ],
        categories: ["French", "Soup", "Comfort Food", "Winter"],
        equipment: [
            "Large pot",
            "Oven-safe soup bowls",
            "Sharp knife",
            "Broiler"
        ]
    }
];

export function updateRecipe(text, container){
    let newHTML = '';
    let found = false;
    console.log(text);
    data.forEach(element => {
        if(element.name === text){
            newHTML = showRecipe(element);
            found = true;
        }
    });
    if (!found){
        console.error("Item not found");
        return;
    }
    container.innerHTML = newHTML;
}