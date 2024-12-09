const headerContext = () => {
  return `
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row items-center gap-4 py-4">
      <!-- Logo and Menu Section - stays same style -->
      <div class="flex items-center space-x-2 w-full md:w-auto">
        <button onclick="toggleSideMenu()"  
          class="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2" >  
          <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-gray-900 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16" />  
          </svg>
        </button>
        <img class="w-18 h-12 mb-2.5" src="/images/Dr.cook logo.png" alt="Dr.Cook logo">
        <span class="dark:text-gray-900 text-3xl font-pacifico text-white">
          Dr.Cook
        </span>
      </div>

      <!-- Search Bar Section - expands full width on mobile -->
      <div class="flex-1 w-full md:pl-4 md:max-w-md">
        <div class="relative">
          <input 
            type="text" 
            placeholder="What would you like to cook today?" 
            class="dark:bg-[#202124] placeholder:dark:text-white dark:text-white text-amber-800 w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 placeholder:text-amber-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-white w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Buttons Section - stacks on mobile -->
      <div class="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <div class="flex gap-4 w-full md:w-auto">
          <button onclick="location.href='/login.html'" class="dark:bg-[#202124] dark:text-white dark:border-white w-full md:w-[120px] rounded-full border border-amber-800 text-amber-800 bg-gray-100 p-1.5 hover:bg-amber-50">Login</button>
          <button onclick="location.href='/signup.html'" class="dark:bg-[#202124] dark:text-white dark:border-white w-full md:w-[120px] rounded-full border border-amber-800 text-amber-800 bg-gray-100 p-1.5 hover:bg-amber-50">SignUp</button>
        </div>
        <div class="flex items-center space-x-2">
          <button onclick="updateMode(this)" class="dark:text-gray-900 pl-3 text-gray-100 hover:text-amber-50">Dark</button>
          <img class="w-5 h-5" src="/images/Dark.png" alt="Dark">
        </div>
      </div>
    </div>
  </div>`;
}

export function showHeader(container) {
  container.innerHTML = headerContext();
}