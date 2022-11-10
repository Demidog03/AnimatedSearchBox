const searchBox = document.querySelector(".search-box")
const searchBtn = document.querySelector(".search-box .search-btn")
const cancelBtn = document.querySelector(".search-box .cancel-btn")
const searchInput = document.querySelector(".search-box input")
const searchData = document.querySelector(".search-box .search-data")

searchBtn.onclick = () => {
    searchBox.classList.add('active')
    searchInput.classList.add('active')
    searchBtn.classList.add('active')
    cancelBtn.classList.add('active')
    if(searchInput.value != ''){
        searchData.classList.add('active')
        searchData.innerHTML = 'You typed: ' + searchInput.value
    }
    else{

    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove('active')
    searchInput.classList.remove('active')
    searchBtn.classList.remove('active')
    cancelBtn.classList.remove('active')
    searchData.classList.remove('active')
    searchInput.value = ''
}



