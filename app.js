let main = document.querySelector('.main');
const searchBtn = document.querySelector('.imgBtn');
const searchedItem = document.querySelector('.searchedItem');
const display = document.querySelector('.display');
const input = document.querySelector('.input');
//search API
function fetchSearchApi(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((searchData) => {
      console.log(searchData);
      const imageUrl = searchData.data;
      debugger;
      const imageElement = imageUrl.map((item) => {
        return `<div> <img class="search_images" src="${item.images.fixed_height.url}"></div>`;
      });
      display.innerHTML = imageElement;
      console.log(imageElement);
    });
}

searchBtn.addEventListener('click', (e) => {
  // searchedItem.innerHTML = input.value;
  const update = input.value.replaceAll(' ', '+');
  const url = `https://api.giphy.com/v1/gifs/search?q=${update}&api_key=cccCgrhtpNLJUQnNJ86pbguPLzWjscn7&q=&limit=25&offset=0&rating=g&lang=en`;
  fetchSearchApi(url);
});

//fetch trending api
function fetchTrendingApi() {
  const trendingUrl =
    'http://api.giphy.com/v1/gifs/trending?api_key=cccCgrhtpNLJUQnNJ86pbguPLzWjscn7';

  fetch(trendingUrl)
    .then((response) => {
      return response.json();
    })
    .then((urlData) => {
      let trendingData = urlData.data;
      let trendingElement = trendingData.map((item) => {
        // console.log(item.images.fixed_height.url);
        return `<div><img class="trendingImg" src='${item.images.fixed_height.url}'></div>`;
      });
      main.innerHTML = trendingElement;
    });
}
fetchTrendingApi();
