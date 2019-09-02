 // Arrow function, just to keep it ES6
$(document).ready(() => {
    //alert(1);

    $('#searchForm').on('submit', (e) => {
        console.log($('#searchText').val());
        e.preventDefault();
    });

});