export const switchMode = (currentMode) => {
    const switchTo = currentMode === 'Dark' ? 'Light' : 'Dark';
    if(window.location.pathname === '/')
        return `
            <div class="flex items-center space-x-2">
                <button onclick="updateMode(this)" class="dark:text-black pl-3 text-white ">${switchTo}</button>
                <img class="w-5 h-5" src="/images/${switchTo}.png" alt="${switchTo}">
            </div>
         `;
    else{
        if(currentMode==='Dark')
        {
            return `
            <div class="flex items-center space-x-2 mx-4">
                <button onclick="updateMode(this)" class="dark:text-white pl-3 text-black mx-1 my-1">${switchTo}</button>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white">
                    <!-- Center circle -->
                    <circle cx="12" cy="12" r="4" fill="currentColor"/>
                    
                    <!-- Sun rays -->
                    <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <!-- Vertical and horizontal rays -->
                        <line x1="12" y1="3" x2="12" y2="6"/>
                        <line x1="12" y1="18" x2="12" y2="21"/>
                        <line x1="3" y1="12" x2="6" y2="12"/>
                        <line x1="18" y1="12" x2="21" y2="12"/>
                        
                        <!-- Diagonal rays -->
                        <line x1="5.636" y1="5.636" x2="7.757" y2="7.757"/>
                        <line x1="16.243" y1="16.243" x2="18.364" y2="18.364"/>
                        <line x1="5.636" y1="18.364" x2="7.757" y2="16.243"/>
                        <line x1="16.243" y1="7.757" x2="18.364" y2="5.636"/>
                    </g>
                </svg>
            </div>
        `;
        }
        else{
        return `
        <div class="flex items-center space-x-1 mx-4">
            <button onclick="updateMode(this)" class="dark:text-white pl-3 text-black mx-1 my-1 ">${switchTo}</button>
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                fill="black"
                stroke="black"
                stroke-width="0.5"
                stroke-linejoin="round"
            />
            </svg>
        </div>
     `;
        }
    }
};

function updateMode(button) {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
        button.textContent = 'Dark';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
        button.textContent = 'Light';
    }
}

// Initialize mode on page load
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'dark';
    const modeButton = document.querySelector('[onclick="updateMode(this)"]');
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        if (modeButton) {
            modeButton.textContent = 'Light';
        }
    } else {
        document.documentElement.classList.remove('dark');
        if (modeButton) {
            modeButton.textContent = 'Dark';
        }
    }
});

window.updateMode = updateMode;
