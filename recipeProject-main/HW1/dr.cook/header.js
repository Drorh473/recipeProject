// save all html content of the header, check current mode to switch img 
const headerContext = () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'dark';
  const buttonText = isDarkMode ? 'Light' : 'Dark';
  
  return `
  <div class="fixed top-0 left-0 right-0 z-50 dark:bg-slate-400 bg-amber-800">
    <div class="w-full">
      <div class="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-4">
        <!-- Logo and Menu Section -->
        <div class="flex items-center space-x-2">
          <button onclick="toggleSideMenu()" class="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
            <!-- SVG for the hamburger menu button (three stripes) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-gray-900 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
          <img class="w-18 h-12 mb-2.5" src="/images/Dr.cook logo.png" alt="Dr.Cook logo">
          <span class="dark:text-gray-900 text-3xl font-pacifico text-white">
            Dr.Cook
          </span>
        </div>

        <!-- Search Bar Section -->
        <div class="flex-1 w-full md:pl-4 md:max-w-md">
          <div class="relative">
            <input 
              type="text" 
              placeholder="What would you like to cook today?" 
              class="dark:bg-[#202124] placeholder:dark:text-white dark:text-white text-amber-800 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 placeholder:text-amber-800">
            <!-- SVG for the search button (magnifying glass) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-white w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <!-- Buttons Section -->
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="flex gap-4">
            <!-- navigate from main page to login and signup --> 
            <button onclick="location.href='/login.html'" class="dark:bg-[#202124] dark:text-white dark:border-white md:w-[120px] rounded-full border border-amber-800 text-amber-800 bg-gray-100 p-1.5 hover:bg-amber-50">Login</button>
            <button onclick="location.href='/signup.html'" class="dark:bg-[#202124] dark:text-white dark:border-white md:w-[120px] rounded-full border border-amber-800 text-amber-800 bg-gray-100 p-1.5 hover:bg-amber-50">SignUp</button>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="updateMode(this)" class="dark:text-gray-900 pl-3 text-gray-100 hover:text-amber-50">${buttonText}</button>
            <img class="w-5 h-5" src="/images/${buttonText}.png" alt="${buttonText}">
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// use funtion to put html into all pages that require header 
export function showHeader(container) {
  container.innerHTML = headerContext();
}