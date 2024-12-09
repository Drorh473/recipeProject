export const showBox = (text,image) => { // text is an array
  const boxId = `recipe-box-${text[0].replace(/\s+/g, '-')}`;
  return `
  <div class="flex justify-center pt-4 sm:pt-6 md:pt-10 px-4 sm:px-6">
      <div class="dark:bg-[#2A3236] dark:border-white flex flex-col sm:flex-row w-full max-w-[1000px] border border-amber-800 rounded bg-[#FFF6E0] shadow-xl">
          <!-- Image Container -->
          <img class="w-full sm:w-[380px] md:h-[375px] h-[250px] sm:h-[350px] object-cover" src="${image}" alt="${text[0]}">
          
          <!-- Content Container -->
          <div class="flex flex-col w-full p-4 sm:p-6">
              <h2 class="dark:text-white text-lg sm:text-xl font-bold text-center">${text[0]}</h2>
              <p class="dark:text-white text-gray-700 mt-2 text-base sm:text-lg mb-3 sm:mb-5 font-ptSerif">
                  ${text[1]}
              </p>
              
              <!-- Icons and Info -->
              <div class="space-y-2 sm:space-y-3">
                  <span class="flex items-center">
                      <img class="dark:hidden h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/DarkClock.png" alt="DarkClock">
                      <img class="hidden dark:block h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/LightClock.png" alt="LightClock">
                      <span class="dark:text-white ml-2 sm:ml-4 text-base sm:text-lg font-bold">
                          ${text[2]}
                      </span>
                  </span>
                  
                  <span class="flex items-center">
                      <img class="dark:hidden h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/BlackOven.png" alt="BlackOven">
                      <img class="hidden dark:block h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/WhiteOven.png" alt="WhiteOven">
                      <span class="dark:text-white ml-2 sm:ml-4 text-base sm:text-lg font-bold">
                          ${text[3]}
                      </span>
                  </span>
                  
                  <span class="flex items-center">
                      <img class="dark:hidden h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/BlackDifficulty.png" alt="BlackDifficulty">
                      <img class="hidden dark:block h-8 sm:h-8 w-8 sm:w-15 pl-2 sm:pl-5 pb-2 sm:pb-3" src="/images/WhiteDifficulty.png" alt="Whiteifficulty">
                      <span class="dark:text-white ml-2 sm:ml-4 text-base sm:text-lg font-bold">
                          ${text[4]}
                      </span>
                  </span>
              </div>
              
              <!-- Button Container -->
              <div class="w-full mt-4 sm:mt-auto sm:h-16 relative">
                  <button 
                      id="${boxId}" 
                      data-recipe="${text[0]}" 
                      onclick="localStorage.setItem('selectedRecipe', '${text[0]}'); window.location.href='recipePage.html';" 
                      class="dark:bg-gray-900 dark:text-white dark:border-white w-full sm:w-40 h-10 rounded-full border border-amber-800 text-amber-800 bg-gray-100 hover:bg-amber-50 sm:absolute sm:bottom-5 sm:right-5">
                      To The Full Recipe
                  </button>
              </div>
          </div>
      </div>
  </div>
`;
}

export function updateBox(text, image, container){
  const newHTML = showBox(text, image);
  container.innerHTML = newHTML;
  
  // Add the event listener here, after the HTML is updated
  const button = container.querySelector('.recipe-button');
  if (button) {
      button.addEventListener('click', function() {
          const recipeName = this.dataset.recipe;
          console.log('Setting recipe:', recipeName);
          localStorage.setItem('selectedRecipe', recipeName);
          console.log('Stored recipe:', localStorage.getItem('selectedRecipe'));
          window.location.href = '/recipePage.html';
      });
  }
}

// Make both functions available globally if needed
window.updateBox = updateBox;