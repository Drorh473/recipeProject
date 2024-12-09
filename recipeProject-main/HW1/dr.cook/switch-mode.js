
export const switchMode = (currentMode) => {
    const switchTo = currentMode === 'Dark' ? 'Light' : 'Dark';
    if(window.location.pathname === '/')
        return `
            <div class="flex items-center space-x-2">
                <button onclick="updateMode(this)" class="dark:text-white pl-3 text-black ">${switchTo}</button>
                <img class="w-5 h-5" src="/images/${switchTo}.png" alt="${switchTo}">
            </div>
         `;
    else{
        return `
        <div class="flex items-center space-x-2">
            <button onclick="updateMode(this)" class="dark:text-white pl-3 text-black ">${switchTo}</button>
            <img class="w-5 h-5" src="/images/${switchTo}.png" alt="${switchTo}">
        </div>
     `;
    }
};

function updateMode(buttonElement) {
    const currentMode = buttonElement.textContent.trim();
    const container = buttonElement.closest('.flex'); // Find the parent container
    const newModeHTML = switchMode(currentMode); // Get the updated HTML
    if (currentMode === 'Dark') {
        document.documentElement.classList.remove('light');    
        document.documentElement.classList.add('dark');    
        savePreference('dark');  
    } else {    
        document.documentElement.classList.remove('dark');    
        document.documentElement.classList.add('light');    
        savePreference('light');  
    }  
    container.outerHTML = newModeHTML;
}

const savePreference = (mode) => { localStorage.setItem('darkMode', mode); };

// Make updateMode globally accessible
window.updateMode = updateMode;
