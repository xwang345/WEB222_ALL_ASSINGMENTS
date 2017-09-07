var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


function loadTableWithFilters(filterType, filterAgeMin, filterAgeMax) {
    var mainTableBody = document.getElementById('main-table-body');

    var content = "";

    petData.forEach(function(e) {
        var tdImgSrc = e.image.src,
            tdImgAlt = e.image.alt,
            tdImgWidth = e.image.width,
            tdImgHeight = e.image.height,
            name = e.name, 
            age = e.age,
            description = e.description,
            type = e.type;
        
        if(type == filterType || filterType == "") {
            content += '<tr><td><img src=' + 
                      tdImgSrc + ' alt=' + tdImgAlt + ' height=' + tdImgHeight + ' width=' + tdImgWidth + 
                      '></td>' + 
                      '<td><h4>' + name + '</h4><p>' + description + '</p><span>' + age + '</span></td></tr>';
        }
    });
    mainTableBody.innerHTML = content;
}

function filterDogs() {
    loadTableWithFilters('dog');
}

function filterCats() {
    loadTableWithFilters('cat');
}

function filterBirds() {
    loadTableWithFilters('bird');
}

function filter_zero_1() {
    loadTableWithFilters('',filterAgeMin,1);
}

function filter_1_3() {
    loadTableWithFilters('',1,3);
}

function filter_4_plus() {
    loadTableWithFilters('',4,filterAgeMax);
}

function filterAllPets(){
    loadTableWithFilters();
}

window.onload = function() {

}