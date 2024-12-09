import { getAllCategories } from './recipePage.js';

// use HTML to show the side bar after pressing on the hamburger 
export const showSideMenu = () => {
    const categories = getAllCategories();
    const categoryButtons = categories.map(category => 
        `<button onclick="showCategory('${category}')" 
            class="block w-full text-left px-4 py-2 text-black dark:text-white 
            hover:bg-amber-100 dark:hover:bg-slate-600">
            ${category}
        </button>`
    ).join('');

    return `
    <div class="h-full p-4 flex flex-col">
        <div class="space-y-4 flex-grow">
            <div class="space-y-3">
                <div>
                    <button class="dark:text-white text-black text-lg w-full text-left px-3 py-2 rounded hover:bg-amber-100 dark:hover:bg-slate-600">
                        All Recipes
                    </button>
                </div>
                <div>
                    <div class="relative">
                        <button onclick="toggleCategoryDropdown()" 
                            class="dark:text-white text-black text-lg w-full flex items-center justify-between px-3 py-2 rounded hover:bg-amber-100 dark:hover:bg-slate-600">
                            <span>Search By Category</span>
                            <svg id="dropdown-arrow" class="w-4 h-4 ml-2 transform transition-transform duration-200" 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                        <div id="category-dropdown" 
                            class="hidden absolute left-full ml-2 top-0 w-48
                            dark:bg-[#2A3236] bg-[#FFF6E0] 
                            border border-amber-800 dark:border-white 
                            rounded-lg shadow-lg z-50
                            transform translate-x-2 opacity-0 transition-all duration-300 ease-in-out">
                            <div class="py-2">
                                ${categoryButtons}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="dark:text-white text-black text-lg w-full text-left px-3 py-2 rounded hover:bg-amber-100 dark:hover:bg-slate-600">
                        Tools
                    </button>
                </div>
                <div>
                    <button class="dark:text-white text-black text-lg w-full text-left px-3 py-2 rounded hover:bg-amber-100 dark:hover:bg-slate-600">
                        Rate Us
                    </button>
                </div>
            </div>
        </div>
        <div class="p-3 flex items-center justify-center border-t border-amber-800 dark:border-white">
            <div class="flex items-center gap-2">
                <img class="w-18 h-12" src="/images/Dr.cook logo.png" alt="Dr.Cook logo">
                <span class="text-black dark:text-white text-2xl font-pacifico">
                    Dr.Cook
                </span>
            </div>
        </div>
    </div>
    `;
};

// Toggle category dropdown
function toggleCategoryDropdown() {
    const dropdown = document.getElementById('category-dropdown');
    const arrow = document.getElementById('dropdown-arrow');
    
    if (dropdown.classList.contains('hidden')) {
        // Show dropdown
        dropdown.classList.remove('hidden');
        // Use setTimeout to ensure the transition works
        setTimeout(() => {
            dropdown.classList.remove('translate-x-2', 'opacity-0');
            dropdown.classList.add('translate-x-0', 'opacity-100');
        }, 10);
        arrow.classList.add('rotate-0');
    } else {
        // Hide dropdown
        dropdown.classList.add('translate-x-2', 'opacity-0');
        arrow.classList.remove('rotate-0');
        // Wait for transition to complete before hiding
        setTimeout(() => {
            dropdown.classList.add('hidden');
        }, 300);
    }
}

// Handle category selection
function showCategory(category) {
    localStorage.setItem('selectedCategory', category);
    window.location.href = '/category.html';
}

// open the side menu by removing hidden mode 
function toggleSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    if (sideMenu) {
        const isHidden = sideMenu.classList.contains('hidden');
        if (isHidden) {
            sideMenu.classList.remove('hidden');
            sideMenu.classList.add('translate-x-0');
            sideMenu.innerHTML = showSideMenu();
        } else {
            sideMenu.classList.add('hidden');
            sideMenu.classList.remove('translate-x-0');
            sideMenu.innerHTML = '';
        }
    }
}

// Expose functions globally
window.toggleSideMenu = toggleSideMenu;
window.toggleCategoryDropdown = toggleCategoryDropdown;
window.showCategory = showCategory;