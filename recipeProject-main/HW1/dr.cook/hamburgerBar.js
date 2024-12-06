// use HTML to show the side bar after pressing on the hamburger 
export const showSideMenu = () => `
    <div class="p-4 space-y-4">
        <div class="row"><button class="dark:text-white text-black text-xl pt-3">All Recipes</button></div>
        <div class="row"><button class="dark:text-white text-black text-xl pt-3">Search By Category</button></div>
        <div class="row"><button class="dark:text-white text-black text-xl pt-3">Tools</button></div>
        <div class="row"><button class="dark:text-white text-black text-xl pt-3">Rate Us</button></div>
    </div>
`;

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

// Expose the function globally to be used in the HTML
window.toggleSideMenu = toggleSideMenu;