 // Arrow function, just to keep it ES6
$(document).ready(() => {
    //alert(1);
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        // console.log($('#searchText').val());
        getMovies(searchText);
        e.preventDefault();
    });
});


function getMovies(searchText){
    // request to the axios Api

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=' + searchText)
    // axios.get('http://wwww.omdbapi.com?s=' + searchText)
    //this is going to return a promise
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
    
}