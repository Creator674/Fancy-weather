// const IMAGE_ACCES_KEY = 'Nw_vIJ8V12FenylBYs53wAic7GMfJAEhjdcgQAsaiLo';
// let image_counter = 0;
// let query_word = 'Belarus';
// // const IMAGE_SECRET_KEY = 'SVhVqGmWAEsDZERUOUAuShQdWqylfOLhKbwyo73nsH8';

// function getSearchUrl(searchQuery = "Minsk") {
//     return `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${IMAGE_ACCES_KEY}`;
// }


// fetch(getSearchUrl(query_word))
//     .then(res => res.json())
//     .then(res => {
//         document.querySelector('body').background = `${res.results[image_counter].urls.full}`;
//         return res;
//     })
//     .catch(e => new Error(e))