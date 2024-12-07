export const showBox = (text,image) => { // text is an array
    return `
        <div class="flex justify-center pt-10">
        <div class ="dark:bg-[#2A3236] dark:border-white flex w-[1000px] border border-amber-800 rounded pl-50 bg-[#FFF6E0] shadow-xl">
          <img class="w-[380px] h-[350px] pl-0 object-cover" src="${image}" alt="${text[0]}">
          <div class="flex flex-col w-full">
            <h2 class="dark:text-white text-xl font-bold text-center">${text[0]}</h2>
            <p class="dark:text-white text-gray-700 mt-2 ml-2 text-lg mb-5 font-ptSerif">
              ${text[1]}
            </p>
            <span class="flex">
              <img class="dark:hidden h-12 w-15 pl-5 pb-3" src="/images/DarkClock.png" alt="DarkClock">
              <img class="hidden dark:block h-12 w-15 pl-5 pb-3" src="/images/LightClock.png" alt="LightClock">
              <span class="dark:text-white  ml-4 mt-1 text-lg font-bold">
              ${text[2]}
              </span>
            </span>
            <span class="flex">
              <img class="dark:hidden h-12 w-15 pl-5 pb-3" src="/images/BlackOven.png" alt="BlackOven">
              <img class="hidden dark:block h-12 w-15 pl-5 pb-3" src="/images/WhiteOven.png" alt="WhiteOven">
              <span class="dark:text-white  ml-4 mt-1 text-lg font-bold">
              ${text[3]}
              </span>
            </span>
            <span class="flex">
              <img class="dark:hidden h-12 w-15 pl-5 pb-3" src="/images/BlackDifficulty.png" alt="BlackDifficulty">
              <img class="hidden dark:block h-12 w-15 pl-5 pb-3" src="/images/WhiteDifficulty.png" alt="Whiteifficulty">
              <span class="dark:text-white  ml-4 mt-1 text-lg font-bold">
              ${text[4]}
              </span>
            </span>
            <div className="button-container" class="w-full h-full relative">
              <button class="dark:bg-gray-900 dark:text-white dark:border-white absolute bottom-5 right-5 rounded-full border border-amber-800 w-40 h-10 text-amber-800 bg-gray-100 hover:bg-amber-50">
                To The Full Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
};

function updateBox(text, image, container){
    const newHTML = showBox(text, image);
    container.innerHTML = newHTML;
}

// Make updateMode globally accessible
window.updateBox = updateBox;